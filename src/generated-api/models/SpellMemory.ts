/* tslint:disable */
/* eslint-disable */
/**
 * Underworld
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LearnedSpell,
    LearnedSpellFromJSON,
    LearnedSpellFromJSONTyped,
    LearnedSpellToJSON,
} from './LearnedSpell';

/**
 * 
 * @export
 * @interface SpellMemory
 */
export interface SpellMemory {
    /**
     * 
     * @type {Array<LearnedSpell>}
     * @memberof SpellMemory
     */
    spells: Array<LearnedSpell>;
    /**
     * 
     * @type {boolean}
     * @memberof SpellMemory
     */
    knowsSpells: boolean;
}

export function SpellMemoryFromJSON(json: any): SpellMemory {
    return SpellMemoryFromJSONTyped(json, false);
}

export function SpellMemoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpellMemory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'spells': ((json['spells'] as Array<any>).map(LearnedSpellFromJSON)),
        'knowsSpells': json['knows_spells'],
    };
}

export function SpellMemoryToJSON(value?: SpellMemory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'spells': ((value.spells as Array<any>).map(LearnedSpellToJSON)),
        'knows_spells': value.knowsSpells,
    };
}

