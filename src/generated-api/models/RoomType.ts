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
export const RoomType = {
    Cave: 'cave',
    Cavern: 'cavern',
    Cemetery: 'cemetery',
    Crypt: 'crypt',
    EntryWay: 'entry_way',
    Mausoleum: 'mausoleum',
    PrisonCell: 'prison_cell',
    Room: 'room',
    TavernHall: 'tavern_hall',
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

