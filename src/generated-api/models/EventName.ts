/* tslint:disable */
/* eslint-disable */
/**
 * Underworld
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const EventName = {
    DeadNpcBeaten: 'dead_npc_beaten',
    FixtureHasHiddenCompartmentDiscovered: 'fixture_has_hidden_compartment_discovered',
    FixtureHiddenCompartmentOpened: 'fixture_hidden_compartment_opened',
    FixtureOpened: 'fixture_opened',
    FixtureViewed: 'fixture_viewed',
    GameDangerLevelIncreased: 'game_danger_level_increased',
    ItemTakenFromFixture: 'item_taken_from_fixture',
    ItemTakenFromNpc: 'item_taken_from_npc',
    NpcCoveredInOil: 'npc_covered_in_oil',
    NpcDamagedByPoison: 'npc_damaged_by_poison',
    NpcHealthDiscovered: 'npc_health_discovered',
    NpcItemDestroyed: 'npc_item_destroyed',
    NpcHitWithAcid: 'npc_hit_with_acid',
    NpcMissed: 'npc_missed',
    NpcPoisoned: 'npc_poisoned',
    NpcPackedDiscovered: 'npc_packed_discovered',
    NpcPoisonDurationChanged: 'npc_poison_duration_changed',
    NpcPoisonEffectDissipated: 'npc_poison_effect_dissipated',
    NpcPoisonLevelChanged: 'npc_poison_level_changed',
    NpcViewed: 'npc_viewed',
    NpcWeaponReadied: 'npc_weapon_readied',
    PlayerDamagedByPoison: 'player_damaged_by_poison',
    PlayerGainedGold: 'player_gained_gold',
    PlayerGainsResurrectionAura: 'player_gains_resurrection_aura',
    PlayerGainsRetributionAura: 'player_gains_retribution_aura',
    PlayerGainsShieldAura: 'player_gains_shield_aura',
    PlayerHealed: 'player_healed',
    PlayerHit: 'player_hit',
    PlayerHitNpc: 'player_hit_npc',
    PlayerHitWithAcid: 'player_hit_with_acid',
    PlayerMaxHealthChanged: 'player_max_health_changed',
    PlayerPoisonLevelChanged: 'player_poison_level_changed',
    PlayerPoisoned: 'player_poisoned',
    PlayerPoisonDurationChanged: 'player_poison_duration_changed',
    PlayerShieldAuraDamaged: 'player_shield_aura_damaged',
    PlayerShieldAuraDissipated: 'player_shield_aura_dissipated',
    PlayerHealthFullyRestored: 'player_health_fully_restored',
    PlayerItemMoved: 'player_item_moved',
    PlayerItemDestroyed: 'player_item_destroyed',
    PlayerItemRemoved: 'player_item_removed',
    PlayerItemUsed: 'player_item_used',
    PlayerKilled: 'player_killed',
    PlayerKilledNpc: 'player_killed_npc',
    PlayerMissed: 'player_missed',
    PlayerPoisonDissipated: 'player_poison_dissipated',
    PlayerResurrected: 'player_resurrected',
    PlayerRetributionAuraDissipated: 'player_retribution_aura_dissipated',
    PlayerSpellForgotten: 'player_spell_forgotten',
    PlayerSpellLearned: 'player_spell_learned',
    PlayerSpellUsed: 'player_spell_used',
    RoomExited: 'room_exited',
    RoomFirstSeen: 'room_first_seen',
    RoomGenerated: 'room_generated'
} as const;
export type EventName = typeof EventName[keyof typeof EventName];


export function EventNameFromJSON(json: any): EventName {
    return EventNameFromJSONTyped(json, false);
}

export function EventNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventName {
    return json as EventName;
}

export function EventNameToJSON(value?: EventName | null): any {
    return value as any;
}

