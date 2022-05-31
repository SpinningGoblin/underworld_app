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
    ConsumableEffectName,
    ConsumableEffectNameFromJSON,
    ConsumableEffectNameFromJSONTyped,
    ConsumableEffectNameToJSON,
} from './ConsumableEffectName';
import {
    LearnSpellEffect,
    LearnSpellEffectFromJSON,
    LearnSpellEffectFromJSONTyped,
    LearnSpellEffectToJSON,
} from './LearnSpellEffect';

/**
 * 
 * @export
 * @interface ConsumableEffect
 */
export interface ConsumableEffect {
    /**
     * 
     * @type {ConsumableEffectName}
     * @memberof ConsumableEffect
     */
    name: ConsumableEffectName;
    /**
     * 
     * @type {LearnSpellEffect}
     * @memberof ConsumableEffect
     */
    learnSpellEffect?: LearnSpellEffect;
}

export function ConsumableEffectFromJSON(json: any): ConsumableEffect {
    return ConsumableEffectFromJSONTyped(json, false);
}

export function ConsumableEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsumableEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': ConsumableEffectNameFromJSON(json['name']),
        'learnSpellEffect': !exists(json, 'learn_spell_effect') ? undefined : LearnSpellEffectFromJSON(json['learn_spell_effect']),
    };
}

export function ConsumableEffectToJSON(value?: ConsumableEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': ConsumableEffectNameToJSON(value.name),
        'learn_spell_effect': LearnSpellEffectToJSON(value.learnSpellEffect),
    };
}

