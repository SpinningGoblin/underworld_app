use rand::Rng;

pub struct SentenceStarters {
    singular: Vec<String>,
    plural: Vec<String>,
}

impl SentenceStarters {
    pub fn weapon_starters() -> Self {
        Self {
            singular: vec!["has a".to_string(), "carries a".to_string()],
            plural: vec!["has some".to_string(), "carries some".to_string()],
        }
    }

    pub fn wearable_starters() -> Self {
        Self {
            singular: vec!["wearing a".to_string()],
            plural: vec!["wearing".to_string()],
        }
    }

    pub fn get_starter(&self, plural: bool) -> &String {
        let mut rng = rand::thread_rng();
        if plural {
            let i = rng.gen_range(0..self.plural.len());
            self.plural.get(i).unwrap()
        } else {
            let i = rng.gen_range(0..self.singular.len());
            self.singular.get(i).unwrap()
        }
    }
}

pub struct SentenceJoiners {
    singular: Vec<String>,
    plural: Vec<String>,
}

impl SentenceJoiners {
    pub fn weapon_joiners() -> Self {
        Self {
            singular: vec!["a".to_string(), "one".to_string()],
            plural: vec!["some".to_string()],
        }
    }

    pub fn wearable_joiners() -> Self {
        Self {
            singular: vec!["a".to_string()],
            plural: vec!["some".to_string()],
        }
    }

    pub fn get_joiner(&self, plural: bool) -> &String {
        let mut rng = rand::thread_rng();
        if plural {
            let i = rng.gen_range(0..self.plural.len());
            self.plural.get(i).unwrap()
        } else {
            let i = rng.gen_range(0..self.singular.len());
            self.singular.get(i).unwrap()
        }
    }
}
