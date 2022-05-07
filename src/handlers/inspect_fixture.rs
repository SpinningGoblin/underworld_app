use rand::Rng;

use crate::{
    actions::inspect_fixture::InspectFixture,
    components::{games::game_state::GameState, player::PlayerCharacter},
    errors::Errors,
    events::{
        event::Event, fixture_can_be_opened_discovered::FixtureCanBeOpenedDiscovered,
        fixture_contained_discovered::FixtureContainedDiscovered,
        fixture_has_hidden_discovered::FixtureHasHiddenDiscovered,
        fixture_hidden_items_discovered::FixtureHiddenItemsDiscovered,
    },
    utils::ids::parse_id,
};

use super::helpers::npc_attack_player;

const DISCOVER_HIDDEN_CHANCE: usize = 3;
const DISCOVER_CONTAINED_CHANCE: usize = 5;
const DISCOVER_CAN_BE_OPENED_CHANCE: usize = 1;
const DISCOVER_HIDDEN_ITEMS_CHANCE: usize = 5;
const NPC_ATTACKS_CHANCE: usize = 5;

pub fn handle_inspect_fixture(
    inspect_fixture: &InspectFixture,
    state: &GameState,
    player: &PlayerCharacter,
) -> Result<Vec<Event>, Errors> {
    let mut events: Vec<Event> = Vec::new();
    let fixture_id = parse_id(&inspect_fixture.fixture_id)?;

    let mut rng = rand::thread_rng();

    if inspect_fixture.discover_can_be_opened
        && rng.gen_range(1..=6) >= DISCOVER_CAN_BE_OPENED_CHANCE
    {
        events.push(Event::FixtureCanBeOpenedDiscovered(
            FixtureCanBeOpenedDiscovered { fixture_id },
        ));
    }

    if inspect_fixture.discover_contained && rng.gen_range(1..=6) >= DISCOVER_CONTAINED_CHANCE {
        events.push(Event::FixtureContainedDiscovered(
            FixtureContainedDiscovered { fixture_id },
        ));
    }

    if inspect_fixture.discover_hidden && rng.gen_range(1..=6) >= DISCOVER_HIDDEN_CHANCE {
        events.push(Event::FixtureHasHiddenDiscovered(
            FixtureHasHiddenDiscovered { fixture_id },
        ));

        if inspect_fixture.discover_hidden_items
            && rng.gen_range(1..=6) >= DISCOVER_HIDDEN_ITEMS_CHANCE
        {
            events.push(Event::FixtureHiddenItemsDiscovered(
                FixtureHiddenItemsDiscovered { fixture_id },
            ));
        }
    }

    if rng.gen_range(1..=6) >= NPC_ATTACKS_CHANCE {
        match state.current_room().first_alive_npc() {
            Some(it) => events.append(&mut npc_attack_player(player, it)),
            None => {}
        };
    }

    Ok(events)
}
