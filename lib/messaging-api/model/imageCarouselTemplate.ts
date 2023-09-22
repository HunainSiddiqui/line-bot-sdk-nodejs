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
import { ImageCarouselColumn } from './imageCarouselColumn';
import { Template } from './template';

export class ImageCarouselTemplate extends Template {
    'columns'?: Array<ImageCarouselColumn>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<ImageCarouselColumn>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageCarouselTemplate.attributeTypeMap);
    }
}

