#[cfg(feature = "bevy_components")]
use bevy_ecs::prelude::Component;
use enum_iterator::IntoEnumIterator;
#[cfg(feature = "serialization")]
use serde::{Deserialize, Serialize};

use std::fmt::Display;

use crate::components::{
    material::{BuiltWithMaterial, Material},
    object_tag::{ObjectTag, TaggedObject},
};

#[derive(Clone, Debug, IntoEnumIterator, PartialEq, Eq, Hash)]
#[cfg_attr(feature = "bevy_components", derive(Component))]
#[cfg_attr(
    feature = "serialization",
    derive(Deserialize, Serialize),
    serde(rename_all = "snake_case")
)]
pub enum FixtureType {
    Barrel,
    Bed,
    Bucket,
    Chair,
    Chest,
    Coffin,
    Cot,
    Crate,
    Pillar,
    SleepingRoll,
    StatueTentacledMonstrosity,
    StatueWarrior,
    Table,
    WeaponRack,
}

impl FixtureType {
    pub fn describe_count(&self, count: usize) -> String {
        if count > 1 {
            format!("{}s", self)
        } else {
            format!("{}", self)
        }
    }
}

impl Display for FixtureType {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let text = match *self {
            FixtureType::Bucket => "bucket",
            FixtureType::Table => "table",
            FixtureType::Chair => "chair",
            FixtureType::Chest => "chest",
            FixtureType::WeaponRack => "weapon rack",
            FixtureType::Bed => "bed",
            FixtureType::Cot => "cot",
            FixtureType::SleepingRoll => "sleeping roll",
            FixtureType::Barrel => "barrel",
            FixtureType::Crate => "crate",
            FixtureType::Coffin => "coffin",
            FixtureType::Pillar => "pillar",
            FixtureType::StatueTentacledMonstrosity => "statue of tentacled monstrosity",
            FixtureType::StatueWarrior => "statue of a warrior",
        };

        write!(f, "{}", text)
    }
}

impl TaggedObject for FixtureType {
    fn tags(&self) -> Vec<ObjectTag> {
        match *self {
            FixtureType::Bed => vec![ObjectTag::Cloth, ObjectTag::Fixture],
            FixtureType::Chair => vec![ObjectTag::Fixture],
            FixtureType::Chest => vec![ObjectTag::Fixture, ObjectTag::Container],
            FixtureType::Cot => vec![ObjectTag::Fixture, ObjectTag::Cloth],
            FixtureType::SleepingRoll => {
                vec![ObjectTag::Fixture, ObjectTag::Cloth, ObjectTag::Leather]
            }
            FixtureType::Table => vec![ObjectTag::Fixture],
            FixtureType::WeaponRack => vec![ObjectTag::Fixture],
            FixtureType::Barrel => vec![ObjectTag::Fixture, ObjectTag::Container],
            FixtureType::Crate => vec![ObjectTag::Fixture, ObjectTag::Container],
            FixtureType::Bucket => vec![ObjectTag::Fixture, ObjectTag::Container],
            FixtureType::Coffin => vec![ObjectTag::Fixture, ObjectTag::Container],
            _ => vec![ObjectTag::Fixture],
        }
    }
}

impl BuiltWithMaterial for FixtureType {
    fn possible_materials(&self) -> Vec<Material> {
        match *self {
            FixtureType::Barrel => vec![Material::Wooden],
            FixtureType::Bed => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Steel,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::Chair => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Steel,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::Chest => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Steel,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::Cot => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Steel,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::Crate => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Steel,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::SleepingRoll => vec![
                Material::Wool,
                Material::Linen,
                Material::Hide,
                Material::Leather,
                Material::Cotton,
            ],
            FixtureType::Table => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Steel,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::WeaponRack => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Steel,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::Bucket => vec![
                Material::Bone,
                Material::Gold,
                Material::Iron,
                Material::Stone,
                Material::Wooden,
            ],
            FixtureType::Coffin => vec![
                Material::Bone,
                Material::Gold,
                Material::Wooden,
                Material::Stone,
            ],
            FixtureType::Pillar => vec![Material::Bone, Material::Gold, Material::Stone],
            FixtureType::StatueTentacledMonstrosity => vec![Material::Bone, Material::Stone],
            FixtureType::StatueWarrior => vec![
                Material::Gold,
                Material::Stone,
                Material::Steel,
                Material::Iron,
            ],
        }
    }
}
