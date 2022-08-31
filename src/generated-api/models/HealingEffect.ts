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
    Attack,
    AttackFromJSON,
    AttackFromJSONTyped,
    AttackToJSON,
} from './Attack';

/**
 * 
 * @export
 * @interface HealingEffect
 */
export interface HealingEffect {
    /**
     * 
     * @type {Attack}
     * @memberof HealingEffect
     */
    healing: Attack;
}

export function HealingEffectFromJSON(json: any): HealingEffect {
    return HealingEffectFromJSONTyped(json, false);
}

export function HealingEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealingEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'healing': AttackFromJSON(json['healing']),
    };
}

export function HealingEffectToJSON(value?: HealingEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'healing': AttackToJSON(value.healing),
    };
}

