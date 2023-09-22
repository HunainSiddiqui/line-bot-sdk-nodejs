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
import { Message } from './message';
import { QuickReply } from './quickReply';
import { Sender } from './sender';

export class VideoMessage extends Message {
    'originalContentUrl'?: string;
    'previewImageUrl'?: string;
    'trackingId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "originalContentUrl",
            "baseName": "originalContentUrl",
            "type": "string"
        },
        {
            "name": "previewImageUrl",
            "baseName": "previewImageUrl",
            "type": "string"
        },
        {
            "name": "trackingId",
            "baseName": "trackingId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VideoMessage.attributeTypeMap);
    }
}

