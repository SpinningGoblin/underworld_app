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


import * as runtime from '../runtime';
import {
    GenerateRoomsRequest,
    GenerateRoomsRequestFromJSON,
    GenerateRoomsRequestToJSON,
    GeneratedNpc,
    GeneratedNpcFromJSON,
    GeneratedNpcToJSON,
    GeneratedRooms,
    GeneratedRoomsFromJSON,
    GeneratedRoomsToJSON,
} from '../models';

export interface GetRandomRoomsRequest {
    generateRoomsRequest: GenerateRoomsRequest;
}

/**
 * RandomizersApi - interface
 * 
 * @export
 * @interface RandomizersApiInterface
 */
export interface RandomizersApiInterface {
    /**
     * # Example  Call `/npc/random` to generate a completely random character
     * @summary Generate a random NPC.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RandomizersApiInterface
     */
    getRandomNpcRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<GeneratedNpc>>;

    /**
     * # Example  Call `/npc/random` to generate a completely random character
     * Generate a random NPC.
     */
    getRandomNpc(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<GeneratedNpc>;

    /**
     * # Example  Call `/random/rooms` to generate one or more rooms.
     * @summary Generate a random room with NPCs and fixtures inside.
     * @param {GenerateRoomsRequest} generateRoomsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RandomizersApiInterface
     */
    getRandomRoomsRaw(requestParameters: GetRandomRoomsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<GeneratedRooms>>;

    /**
     * # Example  Call `/random/rooms` to generate one or more rooms.
     * Generate a random room with NPCs and fixtures inside.
     */
    getRandomRooms(requestParameters: GetRandomRoomsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<GeneratedRooms>;

}

/**
 * 
 */
export class RandomizersApi extends runtime.BaseAPI implements RandomizersApiInterface {

    /**
     * # Example  Call `/npc/random` to generate a completely random character
     * Generate a random NPC.
     */
    async getRandomNpcRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<GeneratedNpc>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/random/npc`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneratedNpcFromJSON(jsonValue));
    }

    /**
     * # Example  Call `/npc/random` to generate a completely random character
     * Generate a random NPC.
     */
    async getRandomNpc(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<GeneratedNpc> {
        const response = await this.getRandomNpcRaw(initOverrides);
        return await response.value();
    }

    /**
     * # Example  Call `/random/rooms` to generate one or more rooms.
     * Generate a random room with NPCs and fixtures inside.
     */
    async getRandomRoomsRaw(requestParameters: GetRandomRoomsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<GeneratedRooms>> {
        if (requestParameters.generateRoomsRequest === null || requestParameters.generateRoomsRequest === undefined) {
            throw new runtime.RequiredError('generateRoomsRequest','Required parameter requestParameters.generateRoomsRequest was null or undefined when calling getRandomRooms.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/random/rooms`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GenerateRoomsRequestToJSON(requestParameters.generateRoomsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneratedRoomsFromJSON(jsonValue));
    }

    /**
     * # Example  Call `/random/rooms` to generate one or more rooms.
     * Generate a random room with NPCs and fixtures inside.
     */
    async getRandomRooms(requestParameters: GetRandomRoomsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<GeneratedRooms> {
        const response = await this.getRandomRoomsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
