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
/**
 * Look at the specified fixture, fixture is viewed using what player
 * currently knows about the fixture.
 * @export
 * @interface LookAtFixture
 */
export interface LookAtFixture {
    /**
     * 
     * @type {string}
     * @memberof LookAtFixture
     */
    fixture_id: string;
}

export function LookAtFixtureFromJSON(json: any): LookAtFixture {
    return LookAtFixtureFromJSONTyped(json, false);
}

export function LookAtFixtureFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookAtFixture {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fixture_id': json['fixture_id'],
    };
}

export function LookAtFixtureToJSON(value?: LookAtFixture | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fixture_id': value.fixture_id,
    };
}

