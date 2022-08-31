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
    ExitType,
    ExitTypeFromJSON,
    ExitTypeFromJSONTyped,
    ExitTypeToJSON,
} from './ExitType';
import {
    RoomExitsGenerationArgsNumExits,
    RoomExitsGenerationArgsNumExitsFromJSON,
    RoomExitsGenerationArgsNumExitsFromJSONTyped,
    RoomExitsGenerationArgsNumExitsToJSON,
} from './RoomExitsGenerationArgsNumExits';

/**
 * Args to tweak the exit generation inside of a room.
 * @export
 * @interface RoomExitsGenerationArgs
 */
export interface RoomExitsGenerationArgs {
    /**
     * 
     * @type {RoomExitsGenerationArgsNumExits}
     * @memberof RoomExitsGenerationArgs
     */
    num_exits?: RoomExitsGenerationArgsNumExits;
    /**
     * What type of exits should be put in the room.
     * @type {Array<ExitType>}
     * @memberof RoomExitsGenerationArgs
     */
    possible_exit_types?: Array<ExitType>;
}

export function RoomExitsGenerationArgsFromJSON(json: any): RoomExitsGenerationArgs {
    return RoomExitsGenerationArgsFromJSONTyped(json, false);
}

export function RoomExitsGenerationArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomExitsGenerationArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'num_exits': !exists(json, 'num_exits') ? undefined : RoomExitsGenerationArgsNumExitsFromJSON(json['num_exits']),
        'possible_exit_types': !exists(json, 'possible_exit_types') ? undefined : ((json['possible_exit_types'] as Array<any>).map(ExitTypeFromJSON)),
    };
}

export function RoomExitsGenerationArgsToJSON(value?: RoomExitsGenerationArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'num_exits': RoomExitsGenerationArgsNumExitsToJSON(value.num_exits),
        'possible_exit_types': value.possible_exit_types === undefined ? undefined : ((value.possible_exit_types as Array<any>).map(ExitTypeToJSON)),
    };
}

