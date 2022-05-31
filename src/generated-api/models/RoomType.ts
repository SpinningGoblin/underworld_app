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


/**
 * 
 * @export
 */
export const RoomType = {
    Cave: 'cave',
    Cavern: 'cavern',
    PrisonCell: 'prison_cell',
    Room: 'room',
    EntryWay: 'entry_way',
    TavernHall: 'tavern_hall',
    Mausoleum: 'mausoleum',
    Cemetery: 'cemetery',
    Crypt: 'crypt',
    TempleHall: 'temple_hall'
} as const;
export type RoomType = typeof RoomType[keyof typeof RoomType];


export function RoomTypeFromJSON(json: any): RoomType {
    return RoomTypeFromJSONTyped(json, false);
}

export function RoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomType {
    return json as RoomType;
}

export function RoomTypeToJSON(value?: RoomType | null): any {
    return value as any;
}

