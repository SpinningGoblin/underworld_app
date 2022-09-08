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
    EquipLocationTag,
    EquipLocationTagFromJSON,
    EquipLocationTagFromJSONTyped,
    EquipLocationTagToJSON,
} from './EquipLocationTag';
import {
    Item,
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';

/**
 * 
 * @export
 * @interface CharacterItem
 */
export interface CharacterItem {
    /**
     * 
     * @type {Item}
     * @memberof CharacterItem
     */
    item: Item;
    /**
     * 
     * @type {EquipLocationTag}
     * @memberof CharacterItem
     */
    equipped_location: EquipLocationTag;
    /**
     * 
     * @type {boolean}
     * @memberof CharacterItem
     */
    at_the_ready: boolean;
}

export function CharacterItemFromJSON(json: any): CharacterItem {
    return CharacterItemFromJSONTyped(json, false);
}

export function CharacterItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item': ItemFromJSON(json['item']),
        'equipped_location': EquipLocationTagFromJSON(json['equipped_location']),
        'at_the_ready': json['at_the_ready'],
    };
}

export function CharacterItemToJSON(value?: CharacterItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item': ItemToJSON(value.item),
        'equipped_location': EquipLocationTagToJSON(value.equipped_location),
        'at_the_ready': value.at_the_ready,
    };
}

