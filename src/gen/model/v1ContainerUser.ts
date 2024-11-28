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
import { V1LinuxContainerUser } from './v1LinuxContainerUser';

/**
* ContainerUser represents user identity information
*/
export class V1ContainerUser {
    'linux'?: V1LinuxContainerUser;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "linux",
            "baseName": "linux",
            "type": "V1LinuxContainerUser"
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerUser.attributeTypeMap;
    }
}
