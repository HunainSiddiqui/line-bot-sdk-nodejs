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

/**
* Column object for carousel template.
*/
export class CarouselColumn {
    'thumbnailImageUrl'?: string;
    'imageBackgroundColor'?: string;
    'title'?: string;
    'text'?: string;
    'defaultAction'?: Action;
    'actions'?: Array<Action>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "thumbnailImageUrl",
            "baseName": "thumbnailImageUrl",
            "type": "string"
        },
        {
            "name": "imageBackgroundColor",
            "baseName": "imageBackgroundColor",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "defaultAction",
            "baseName": "defaultAction",
            "type": "Action"
        },
        {
            "name": "actions",
            "baseName": "actions",
            "type": "Array<Action>"
        }    ];

    static getAttributeTypeMap() {
        return CarouselColumn.attributeTypeMap;
    }
}

