#[cfg(feature = "bevy_components")]
use bevy_ecs::prelude::Component;
#[cfg(feature = "openapi")]
use poem_openapi::Enum;
#[cfg(feature = "serialization")]
use serde::{Deserialize, Serialize};

use std::fmt::Display;

#[derive(Clone, Debug, PartialEq)]
#[cfg_attr(feature = "bevy_components", derive(Component))]
#[cfg_attr(
    feature = "serialization",
    derive(Deserialize, Serialize),
    serde(rename_all = "snake_case")
)]
#[cfg_attr(feature = "openapi", derive(Enum), oai(rename_all = "snake_case"))]
pub enum LifeModifier {
    Dead,
    Skeleton,
    Vampire,
    Zombie,
}

impl Display for LifeModifier {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let text = match *self {
            LifeModifier::Skeleton => "skeleton",
            LifeModifier::Vampire => "vampire",
            LifeModifier::Zombie => "zombie",
            LifeModifier::Dead => "dead",
        };

        write!(f, "{}", text)
    }
}

impl LifeModifier {
    pub fn as_adjective(&self) -> String {
        match *self {
            LifeModifier::Skeleton => "skeletal".to_string(),
            LifeModifier::Vampire => "vampiric".to_string(),
            LifeModifier::Zombie => "zombified".to_string(),
            LifeModifier::Dead => "dead".to_string(),
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::components::life_modifier::LifeModifier;

    #[test]
    fn to_string() {
        assert_eq!("zombie", LifeModifier::Zombie.to_string());
        assert_eq!("vampire", LifeModifier::Vampire.to_string());
        assert_eq!("skeleton", LifeModifier::Skeleton.to_string());
    }

    #[test]
    fn as_adjective() {
        assert_eq!("zombified", LifeModifier::Zombie.as_adjective());
        assert_eq!("vampiric", LifeModifier::Vampire.as_adjective());
        assert_eq!("skeletal", LifeModifier::Skeleton.as_adjective());
    }
}
