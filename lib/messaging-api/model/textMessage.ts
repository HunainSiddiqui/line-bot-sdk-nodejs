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
import { Emoji } from './emoji';
import { Message } from './message';
import { QuickReply } from './quickReply';
import { Sender } from './sender';

export class TextMessage extends Message {
    'text'?: string;
    'emojis'?: Array<Emoji>;
    /**
    * Quote token of the message you want to quote.
    */
    'quoteToken'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "emojis",
            "baseName": "emojis",
            "type": "Array<Emoji>"
        },
        {
            "name": "quoteToken",
            "baseName": "quoteToken",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextMessage.attributeTypeMap);
    }
}

