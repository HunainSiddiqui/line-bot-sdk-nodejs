/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RequestFile } from './models';
import { ErrorDetail } from './errorDetail';

export class ErrorResponse {
    /**
    * Message containing information about the error.
    */
    'message': string;
    /**
    * An array of error details. If the array is empty, this property will not be included in the response.
    */
    'details'?: Array<ErrorDetail>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<ErrorDetail>"
        }    ];

    static getAttributeTypeMap() {
        return ErrorResponse.attributeTypeMap;
    }
}

