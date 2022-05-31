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
    CharacterItem,
    CharacterItemFromJSON,
    CharacterItemFromJSONTyped,
    CharacterItemToJSON,
} from './CharacterItem';

/**
 * 
 * @export
 * @interface Inventory
 */
export interface Inventory {
    /**
     * 
     * @type {Array<CharacterItem>}
     * @memberof Inventory
     */
    equipment: Array<CharacterItem>;
}

export function InventoryFromJSON(json: any): Inventory {
    return InventoryFromJSONTyped(json, false);
}

export function InventoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Inventory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'equipment': ((json['equipment'] as Array<any>).map(CharacterItemFromJSON)),
    };
}

export function InventoryToJSON(value?: Inventory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'equipment': ((value.equipment as Array<any>).map(CharacterItemToJSON)),
    };
}

