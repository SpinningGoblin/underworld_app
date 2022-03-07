use underworld_core::{
    components::character::CharacterViewArgs,
    generators::{
        characters::CharacterPrototype, generator::Generator, non_players::NonPlayerPrototype,
    },
    systems::view::character::look_at,
};

pub fn main() {
    let prototype = NonPlayerPrototype {
        name: None,
        character_generator: Box::new(CharacterPrototype::random_species_overloaded()),
    };
    let character = prototype.generate().character;
    let view = look_at(&character, &CharacterViewArgs::default(), true);
    if let Some(inventory) = &view.inventory {
        println!("{}", inventory);
    }
    println!("{}", &view.describe_species());
}
