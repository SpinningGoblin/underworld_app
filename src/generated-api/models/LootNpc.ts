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
/**
 * 
 * @export
 * @interface LootNpc
 */
export interface LootNpc {
    /**
     * 
     * @type {string}
     * @memberof LootNpc
     */
    npcId: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LootNpc
     */
    itemIds: Array<string>;
}

export function LootNpcFromJSON(json: any): LootNpc {
    return LootNpcFromJSONTyped(json, false);
}

export function LootNpcFromJSONTyped(json: any, ignoreDiscriminator: boolean): LootNpc {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'npcId': json['npc_id'],
        'itemIds': json['item_ids'],
    };
}

export function LootNpcToJSON(value?: LootNpc | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'npc_id': value.npcId,
        'item_ids': value.itemIds,
    };
}

