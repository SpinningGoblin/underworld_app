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

import { exists, mapValues } from '../runtime';
import {
    ExitDescriptor,
    ExitDescriptorFromJSON,
    ExitDescriptorFromJSONTyped,
    ExitDescriptorToJSON,
} from './ExitDescriptor';
import {
    ExitType,
    ExitTypeFromJSON,
    ExitTypeFromJSONTyped,
    ExitTypeToJSON,
} from './ExitType';
import {
    Identifier,
    IdentifierFromJSON,
    IdentifierFromJSONTyped,
    IdentifierToJSON,
} from './Identifier';
import {
    Material,
    MaterialFromJSON,
    MaterialFromJSONTyped,
    MaterialToJSON,
} from './Material';
import {
    Size,
    SizeFromJSON,
    SizeFromJSONTyped,
    SizeToJSON,
} from './Size';

/**
 * 
 * @export
 * @interface Exit
 */
export interface Exit {
    /**
     * 
     * @type {Identifier}
     * @memberof Exit
     */
    identifier: Identifier;
    /**
     * 
     * @type {ExitType}
     * @memberof Exit
     */
    exitType: ExitType;
    /**
     * 
     * @type {Material}
     * @memberof Exit
     */
    material?: Material;
    /**
     * 
     * @type {Array<ExitDescriptor>}
     * @memberof Exit
     */
    descriptors: Array<ExitDescriptor>;
    /**
     * 
     * @type {Size}
     * @memberof Exit
     */
    size?: Size;
}

export function ExitFromJSON(json: any): Exit {
    return ExitFromJSONTyped(json, false);
}

export function ExitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Exit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifier': IdentifierFromJSON(json['identifier']),
        'exitType': ExitTypeFromJSON(json['exit_type']),
        'material': !exists(json, 'material') ? undefined : MaterialFromJSON(json['material']),
        'descriptors': ((json['descriptors'] as Array<any>).map(ExitDescriptorFromJSON)),
        'size': !exists(json, 'size') ? undefined : SizeFromJSON(json['size']),
    };
}

export function ExitToJSON(value?: Exit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier': IdentifierToJSON(value.identifier),
        'exit_type': ExitTypeToJSON(value.exitType),
        'material': MaterialToJSON(value.material),
        'descriptors': ((value.descriptors as Array<any>).map(ExitDescriptorToJSON)),
        'size': SizeToJSON(value.size),
    };
}

