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
    FixtureItem,
    FixtureItemFromJSON,
    FixtureItemFromJSONTyped,
    FixtureItemToJSON,
} from './FixtureItem';
import {
    FixtureType,
    FixtureTypeFromJSON,
    FixtureTypeFromJSONTyped,
    FixtureTypeToJSON,
} from './FixtureType';
import {
    Identifier,
    IdentifierFromJSON,
    IdentifierFromJSONTyped,
    IdentifierToJSON,
} from './Identifier';
import {
    ItemDescriptor,
    ItemDescriptorFromJSON,
    ItemDescriptorFromJSONTyped,
    ItemDescriptorToJSON,
} from './ItemDescriptor';
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
 * @interface Fixture
 */
export interface Fixture {
    /**
     * 
     * @type {Identifier}
     * @memberof Fixture
     */
    identifier: Identifier;
    /**
     * 
     * @type {FixtureType}
     * @memberof Fixture
     */
    fixtureType: FixtureType;
    /**
     * 
     * @type {Material}
     * @memberof Fixture
     */
    material?: Material;
    /**
     * 
     * @type {Size}
     * @memberof Fixture
     */
    size: Size;
    /**
     * 
     * @type {Array<ItemDescriptor>}
     * @memberof Fixture
     */
    descriptors: Array<ItemDescriptor>;
    /**
     * 
     * @type {Array<FixtureItem>}
     * @memberof Fixture
     */
    items: Array<FixtureItem>;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    knowsContainedItems: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    knowsHiddenCompartmentItems: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    hasHiddenCompartment: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    knowsIfHiddenCompartment: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    open: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    canBeOpened: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    knowsIfCanBeOpened: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Fixture
     */
    hiddenCompartmentOpen: boolean;
}

export function FixtureFromJSON(json: any): Fixture {
    return FixtureFromJSONTyped(json, false);
}

export function FixtureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Fixture {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifier': IdentifierFromJSON(json['identifier']),
        'fixtureType': FixtureTypeFromJSON(json['fixture_type']),
        'material': !exists(json, 'material') ? undefined : MaterialFromJSON(json['material']),
        'size': SizeFromJSON(json['size']),
        'descriptors': ((json['descriptors'] as Array<any>).map(ItemDescriptorFromJSON)),
        'items': ((json['items'] as Array<any>).map(FixtureItemFromJSON)),
        'knowsContainedItems': json['knows_contained_items'],
        'knowsHiddenCompartmentItems': json['knows_hidden_compartment_items'],
        'hasHiddenCompartment': json['has_hidden_compartment'],
        'knowsIfHiddenCompartment': json['knows_if_hidden_compartment'],
        'open': json['open'],
        'canBeOpened': json['can_be_opened'],
        'knowsIfCanBeOpened': json['knows_if_can_be_opened'],
        'hiddenCompartmentOpen': json['hidden_compartment_open'],
    };
}

export function FixtureToJSON(value?: Fixture | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier': IdentifierToJSON(value.identifier),
        'fixture_type': FixtureTypeToJSON(value.fixtureType),
        'material': MaterialToJSON(value.material),
        'size': SizeToJSON(value.size),
        'descriptors': ((value.descriptors as Array<any>).map(ItemDescriptorToJSON)),
        'items': ((value.items as Array<any>).map(FixtureItemToJSON)),
        'knows_contained_items': value.knowsContainedItems,
        'knows_hidden_compartment_items': value.knowsHiddenCompartmentItems,
        'has_hidden_compartment': value.hasHiddenCompartment,
        'knows_if_hidden_compartment': value.knowsIfHiddenCompartment,
        'open': value.open,
        'can_be_opened': value.canBeOpened,
        'knows_if_can_be_opened': value.knowsIfCanBeOpened,
        'hidden_compartment_open': value.hiddenCompartmentOpen,
    };
}

