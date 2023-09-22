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
import { Action } from './action';

export class ImageCarouselColumn {
    'imageUrl'?: string;
    'action'?: Action;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "imageUrl",
            "baseName": "imageUrl",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "Action"
        }    ];

    static getAttributeTypeMap() {
        return ImageCarouselColumn.attributeTypeMap;
    }
}

