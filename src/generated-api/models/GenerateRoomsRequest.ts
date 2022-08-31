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
    GenerateSingleRoom,
    GenerateSingleRoomFromJSON,
    GenerateSingleRoomFromJSONTyped,
    GenerateSingleRoomToJSON,
} from './GenerateSingleRoom';

/**
 * 
 * @export
 * @interface GenerateRoomsRequest
 */
export interface GenerateRoomsRequest {
    /**
     * 
     * @type {Array<GenerateSingleRoom>}
     * @memberof GenerateRoomsRequest
     */
    room_args: Array<GenerateSingleRoom>;
}

export function GenerateRoomsRequestFromJSON(json: any): GenerateRoomsRequest {
    return GenerateRoomsRequestFromJSONTyped(json, false);
}

export function GenerateRoomsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerateRoomsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'room_args': ((json['room_args'] as Array<any>).map(GenerateSingleRoomFromJSON)),
    };
}

export function GenerateRoomsRequestToJSON(value?: GenerateRoomsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'room_args': ((value.room_args as Array<any>).map(GenerateSingleRoomToJSON)),
    };
}

