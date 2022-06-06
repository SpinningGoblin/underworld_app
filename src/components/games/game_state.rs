use std::collections::HashMap;

#[cfg(feature = "bevy_components")]
use bevy_ecs::prelude::Component;
#[cfg(feature = "serialization")]
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::{
    components::{
        character::CharacterViewArgs,
        fixtures::fixture::FixtureViewArgs,
        non_player::NonPlayerViewArgs,
        rooms::{room::Room, room_view::RoomView},
        worlds::world::World,
    },
    systems::view::room::view,
};

use super::{character_knowledge::CharacterKnowledge, fixture_knowledge::FixtureKnowledge};

#[derive(Clone, Debug)]
#[cfg_attr(feature = "bevy_components", derive(Component))]
#[cfg_attr(feature = "serialization", derive(Deserialize, Serialize))]
pub struct GameState {
    pub id: Uuid,
    pub name: Option<String>,
    pub world: World,
    pub current_room_id: Uuid,
    #[cfg_attr(feature = "serialization", serde(default))]
    pub rooms_seen: Vec<Uuid>,
    pub player_knows_all: bool,
    #[cfg_attr(feature = "serialization", serde(default))]
    pub player_npc_knowledge: HashMap<Uuid, CharacterKnowledge>,
    #[cfg_attr(feature = "serialization", serde(default))]
    pub player_fixture_knowledge: HashMap<Uuid, FixtureKnowledge>,
}

impl GameState {
    pub fn npc_knowledge(&self, npc_id: &Uuid) -> CharacterKnowledge {
        self.player_npc_knowledge
            .get(npc_id)
            .cloned()
            .unwrap_or_default()
    }

    pub fn fixture_knowledge(&self, fixture_id: &Uuid) -> FixtureKnowledge {
        self.player_fixture_knowledge
            .get(fixture_id)
            .cloned()
            .unwrap_or_default()
    }

    pub fn set_npc_knowledge(&mut self, npc_id: Uuid, knowledge: CharacterKnowledge) {
        self.player_npc_knowledge.insert(npc_id, knowledge);
    }

    pub fn set_fixture_knowledge(&mut self, fixture_id: Uuid, knowledge: FixtureKnowledge) {
        self.player_fixture_knowledge.insert(fixture_id, knowledge);
    }

    pub fn current_room_exits(&self) -> Vec<Uuid> {
        self.current_room()
            .exits
            .iter()
            .map(|exit| exit.id)
            .collect()
    }

    pub fn current_room(&self) -> &Room {
        self.world
            .rooms
            .iter()
            .find(|room| room.id.eq(&self.current_room_id))
            .unwrap()
    }

    pub fn current_room_mut(&mut self) -> &mut Room {
        self.world
            .rooms
            .iter_mut()
            .find(|room| room.id.eq(&self.current_room_id))
            .unwrap()
    }

    pub fn view_current_room(&mut self) -> RoomView {
        let room = self.current_room();

        let mut fixture_args: HashMap<Uuid, FixtureViewArgs> = HashMap::new();

        for fixture_id in room
            .fixture_positions
            .iter()
            .map(|fixture_position| fixture_position.fixture.id)
        {
            let knowledge = self.fixture_knowledge(&fixture_id);

            fixture_args.insert(
                fixture_id,
                FixtureViewArgs {
                    knows_items: knowledge.knows_items,
                    knows_hidden: knowledge.knows_hidden_items,
                    knows_has_hidden: knowledge.knows_has_hidden,
                    knows_can_be_opened: knowledge.knows_can_be_opened,
                },
            );
        }

        let mut npc_args: HashMap<Uuid, NonPlayerViewArgs> = HashMap::new();

        for npc_id in room
            .npc_positions
            .iter()
            .map(|npc_position| &npc_position.npc)
            .map(|npc| npc.id)
        {
            let knowledge = self.npc_knowledge(&npc_id);
            npc_args.insert(
                npc_id,
                NonPlayerViewArgs {
                    character_args: CharacterViewArgs {
                        knows_health: knowledge.knows_health,
                        knows_inventory: knowledge.knows_inventory,
                        knows_hidden_in_inventory: knowledge.knows_hidden_in_inventory,
                        knows_packed_in_inventory: knowledge.knows_packed_in_inventory,
                    },
                },
            );
        }

        let mut exit_visitations: HashMap<Uuid, bool> = HashMap::new();
        let room_id = room.id;
        for exit in room.exits.iter() {
            let exit_map = match self
                .world
                .exit_graph
                .iter()
                .find(|exit_map| exit_map.exit_id.eq(&exit.id))
            {
                Some(it) => it,
                None => continue,
            };

            let has_visited_other_room = exit_map.other_room_id(room_id).is_some();

            exit_visitations.insert(exit.id, has_visited_other_room);
        }

        view(
            room,
            npc_args,
            fixture_args,
            exit_visitations,
            self.player_knows_all,
        )
    }
}
