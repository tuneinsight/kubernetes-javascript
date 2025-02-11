/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1PriorityLevelConfigurationCondition } from './v1PriorityLevelConfigurationCondition';

/**
* PriorityLevelConfigurationStatus represents the current state of a \"request-priority\".
*/
export class V1PriorityLevelConfigurationStatus {
    /**
    * `conditions` is the current state of \"request-priority\".
    */
    'conditions'?: Array<V1PriorityLevelConfigurationCondition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1PriorityLevelConfigurationCondition>"
        }    ];

    static getAttributeTypeMap() {
        return V1PriorityLevelConfigurationStatus.attributeTypeMap;
    }
}

