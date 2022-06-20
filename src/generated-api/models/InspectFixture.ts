/* tslint:disable */
/* eslint-disable */
/**
 * Underworld
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Inspect an NPC, with a chance to reveal more information
 * than was previously known about the NPC.
 * @export
 * @interface InspectFixture
 */
export interface InspectFixture {
    /**
     * 
     * @type {string}
     * @memberof InspectFixture
     */
    fixture_id: string;
    /**
     * Attempt to discover any hidden compartments and its contents.
     * @type {boolean}
     * @memberof InspectFixture
     */
    discover_hidden_compartment: boolean;
}

export function InspectFixtureFromJSON(json: any): InspectFixture {
    return InspectFixtureFromJSONTyped(json, false);
}

export function InspectFixtureFromJSONTyped(json: any, ignoreDiscriminator: boolean): InspectFixture {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fixture_id': json['fixture_id'],
        'discover_hidden_compartment': json['discover_hidden_compartment'],
    };
}

export function InspectFixtureToJSON(value?: InspectFixture | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fixture_id': value.fixture_id,
        'discover_hidden_compartment': value.discover_hidden_compartment,
    };
}

