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

import { exists, mapValues } from '../runtime';
import {
    LifeModifier,
    LifeModifierFromJSON,
    LifeModifierFromJSONTyped,
    LifeModifierToJSON,
} from './LifeModifier';
import {
    RoomNpcGenerationArgs,
    RoomNpcGenerationArgsFromJSON,
    RoomNpcGenerationArgsFromJSONTyped,
    RoomNpcGenerationArgsToJSON,
} from './RoomNpcGenerationArgs';
import {
    RoomNpcGenerationArgsNumGroups,
    RoomNpcGenerationArgsNumGroupsFromJSON,
    RoomNpcGenerationArgsNumGroupsFromJSONTyped,
    RoomNpcGenerationArgsNumGroupsToJSON,
} from './RoomNpcGenerationArgsNumGroups';
import {
    Species,
    SpeciesFromJSON,
    SpeciesFromJSONTyped,
    SpeciesToJSON,
} from './Species';

/**
 * 
 * @export
 * @interface GenerateSingleRoomRoomNpcsGenerationArgs
 */
export interface GenerateSingleRoomRoomNpcsGenerationArgs {
    /**
     * 
     * @type {RoomNpcGenerationArgsNumGroups}
     * @memberof GenerateSingleRoomRoomNpcsGenerationArgs
     */
    num_groups?: RoomNpcGenerationArgsNumGroups;
    /**
     * If you want to limit the species that can spawn, set them here.
     * Otherwise all species will be used.
     * @type {Array<Species>}
     * @memberof GenerateSingleRoomRoomNpcsGenerationArgs
     */
    possible_species?: Array<Species>;
    /**
     * Limit the life modifiers that NPCs can be.
     * This does not guarantee that NPCs will spawn with these modifiers.
     * @type {Array<LifeModifier>}
     * @memberof GenerateSingleRoomRoomNpcsGenerationArgs
     */
    possible_life_modifiers?: Array<LifeModifier>;
    /**
     * If you'd like NPCs to not spawn already killed, set this to false.
     * Defaults to true.
     * @type {boolean}
     * @memberof GenerateSingleRoomRoomNpcsGenerationArgs
     */
    allow_npcs_to_spawn_dead?: boolean;
}

export function GenerateSingleRoomRoomNpcsGenerationArgsFromJSON(json: any): GenerateSingleRoomRoomNpcsGenerationArgs {
    return GenerateSingleRoomRoomNpcsGenerationArgsFromJSONTyped(json, false);
}

export function GenerateSingleRoomRoomNpcsGenerationArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateSingleRoomRoomNpcsGenerationArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'num_groups': !exists(json, 'num_groups') ? undefined : RoomNpcGenerationArgsNumGroupsFromJSON(json['num_groups']),
        'possible_species': !exists(json, 'possible_species') ? undefined : ((json['possible_species'] as Array<any>).map(SpeciesFromJSON)),
        'possible_life_modifiers': !exists(json, 'possible_life_modifiers') ? undefined : ((json['possible_life_modifiers'] as Array<any>).map(LifeModifierFromJSON)),
        'allow_npcs_to_spawn_dead': !exists(json, 'allow_npcs_to_spawn_dead') ? undefined : json['allow_npcs_to_spawn_dead'],
    };
}

export function GenerateSingleRoomRoomNpcsGenerationArgsToJSON(value?: GenerateSingleRoomRoomNpcsGenerationArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'num_groups': RoomNpcGenerationArgsNumGroupsToJSON(value.num_groups),
        'possible_species': value.possible_species === undefined ? undefined : ((value.possible_species as Array<any>).map(SpeciesToJSON)),
        'possible_life_modifiers': value.possible_life_modifiers === undefined ? undefined : ((value.possible_life_modifiers as Array<any>).map(LifeModifierToJSON)),
        'allow_npcs_to_spawn_dead': value.allow_npcs_to_spawn_dead,
    };
}

