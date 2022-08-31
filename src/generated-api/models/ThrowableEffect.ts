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
    OilSplashEffect,
    OilSplashEffectFromJSON,
    OilSplashEffectFromJSONTyped,
    OilSplashEffectToJSON,
} from './OilSplashEffect';
import {
    ThrowableEffectName,
    ThrowableEffectNameFromJSON,
    ThrowableEffectNameFromJSONTyped,
    ThrowableEffectNameToJSON,
} from './ThrowableEffectName';

/**
 * 
 * @export
 * @interface ThrowableEffect
 */
export interface ThrowableEffect {
    /**
     * 
     * @type {ThrowableEffectName}
     * @memberof ThrowableEffect
     */
    name: ThrowableEffectName;
    /**
     * 
     * @type {OilSplashEffect}
     * @memberof ThrowableEffect
     */
    oil_splash_effect?: OilSplashEffect;
}

export function ThrowableEffectFromJSON(json: any): ThrowableEffect {
    return ThrowableEffectFromJSONTyped(json, false);
}

export function ThrowableEffectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThrowableEffect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': ThrowableEffectNameFromJSON(json['name']),
        'oil_splash_effect': !exists(json, 'oil_splash_effect') ? undefined : OilSplashEffectFromJSON(json['oil_splash_effect']),
    };
}

export function ThrowableEffectToJSON(value?: ThrowableEffect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': ThrowableEffectNameToJSON(value.name),
        'oil_splash_effect': OilSplashEffectToJSON(value.oil_splash_effect),
    };
}

