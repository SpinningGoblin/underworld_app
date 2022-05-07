pub fn main() {
    #[cfg(feature = "serialization")]
    #[cfg(feature = "json")]
    {
        use serde::Serialize;
        use underworld_core::{
            actions::{
                action::Action, attack_npc::AttackNpc, exit_room::ExitRoom, inspect_npc::InspectNpc,
            },
            components::{games::game_state::GameState, player::PlayerCharacter},
            game::Game,
            generators::{game::game_generator, generator::Generator, players::player_generator},
        };

        let player = player_generator("Me", None, None, None).generate();
        let state = game_generator().generate();
        let mut game = Game { state, player };

        let first_exit_id = match game.state.current_room_exits().get(0) {
            Some(it) => it.clone(),
            None => return,
        };

        let exit_room = ExitRoom {
            exit_id: first_exit_id.to_string(),
        };

        game.handle_action(&Action::ExitRoom(exit_room)).unwrap();
        let npc_id = match game.state.current_room().npc_positions.get(0) {
            Some(it) => it.npcs.get(0).unwrap().identifier.id,
            None => return,
        };

        let inspect = InspectNpc {
            npc_id: npc_id.to_string(),
            discover_health: true,
            discover_name: true,
            discover_packed_items: true,
            discover_hidden_items: true,
        };
        game.handle_action(&Action::InspectNpc(inspect)).unwrap();
        let attack = AttackNpc {
            npc_id: npc_id.to_string(),
        };
        game.handle_action(&Action::AttackNpc(attack)).unwrap();

        #[derive(Serialize)]
        struct SerializedGame {
            state: GameState,
            player: PlayerCharacter,
        }

        let serialized_game = SerializedGame {
            state: game.state.clone(),
            player: game.player.clone(),
        };

        let serialized_new_game = serde_json::to_string(&serialized_game).unwrap();
        println!("{}", &serialized_new_game);
    }
}
