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


/**
 * 
 * @export
 */
export const RoomDescriptor = {
    Chill: 'chill',
    Dark: 'dark',
    Dim: 'dim',
    Grimy: 'grimy',
    Moist: 'moist',
    Freezing: 'freezing',
    Steamy: 'steamy',
    Sweltering: 'sweltering'
} as const;
export type RoomDescriptor = typeof RoomDescriptor[keyof typeof RoomDescriptor];


export function RoomDescriptorFromJSON(json: any): RoomDescriptor {
    return RoomDescriptorFromJSONTyped(json, false);
}

export function RoomDescriptorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomDescriptor {
    return json as RoomDescriptor;
}

export function RoomDescriptorToJSON(value?: RoomDescriptor | null): any {
    return value as any;
}

