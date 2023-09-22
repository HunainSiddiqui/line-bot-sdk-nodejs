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

export class Emoji {
    'index'?: number;
    'productId'?: string;
    'emojiId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "index",
            "baseName": "index",
            "type": "number"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "emojiId",
            "baseName": "emojiId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Emoji.attributeTypeMap;
    }
}

