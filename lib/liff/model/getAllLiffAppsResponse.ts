/**
 * LIFF server API
 * LIFF Server API.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RequestFile } from './models';
import { LiffApp } from './liffApp';

export class GetAllLiffAppsResponse {
    'apps'?: Array<LiffApp>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apps",
            "baseName": "apps",
            "type": "Array<LiffApp>"
        }    ];

    static getAttributeTypeMap() {
        return GetAllLiffAppsResponse.attributeTypeMap;
    }
}

