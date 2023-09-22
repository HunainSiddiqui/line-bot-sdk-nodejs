/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { RequestFile } from './models';
import { GetMessageEventResponseClick } from './getMessageEventResponseClick';
import { GetMessageEventResponseMessage } from './getMessageEventResponseMessage';
import { GetMessageEventResponseOverview } from './getMessageEventResponseOverview';

/**
* Statistics about how users interact with narrowcast messages or broadcast messages sent from your LINE Official Account.
*/
export class GetMessageEventResponse {
    'overview'?: GetMessageEventResponseOverview;
    /**
    * Array of information about individual message bubbles.
    */
    'messages'?: Array<GetMessageEventResponseMessage>;
    /**
    * Array of information about opened URLs in the message.
    */
    'clicks'?: Array<GetMessageEventResponseClick>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "overview",
            "baseName": "overview",
            "type": "GetMessageEventResponseOverview"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<GetMessageEventResponseMessage>"
        },
        {
            "name": "clicks",
            "baseName": "clicks",
            "type": "Array<GetMessageEventResponseClick>"
        }    ];

    static getAttributeTypeMap() {
        return GetMessageEventResponse.attributeTypeMap;
    }
}

