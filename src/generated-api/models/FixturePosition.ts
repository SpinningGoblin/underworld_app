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
    Fixture,
    FixtureFromJSON,
    FixtureFromJSONTyped,
    FixtureToJSON,
} from './Fixture';
import {
    FixturePositionDescriptor,
    FixturePositionDescriptorFromJSON,
    FixturePositionDescriptorFromJSONTyped,
    FixturePositionDescriptorToJSON,
} from './FixturePositionDescriptor';

/**
 * 
 * @export
 * @interface FixturePosition
 */
export interface FixturePosition {
    /**
     * 
     * @type {Fixture}
     * @memberof FixturePosition
     */
    fixture: Fixture;
    /**
     * 
     * @type {FixturePositionDescriptor}
     * @memberof FixturePosition
     */
    position_descriptor?: FixturePositionDescriptor;
}

export function FixturePositionFromJSON(json: any): FixturePosition {
    return FixturePositionFromJSONTyped(json, false);
}

export function FixturePositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixturePosition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fixture': FixtureFromJSON(json['fixture']),
        'position_descriptor': !exists(json, 'position_descriptor') ? undefined : FixturePositionDescriptorFromJSON(json['position_descriptor']),
    };
}

export function FixturePositionToJSON(value?: FixturePosition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fixture': FixtureToJSON(value.fixture),
        'position_descriptor': FixturePositionDescriptorToJSON(value.position_descriptor),
    };
}

