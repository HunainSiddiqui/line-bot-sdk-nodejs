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

/**
* Request entity of the Acquire Control API
*/
export class AcquireChatControlRequest {
    /**
    * `True`: After the time limit (ttl) has passed, the initiative (Chat Control) will return to the Primary Channel. (Default) `False`: There\'s no time limit and the initiative (Chat Control) doesn\'t change over time. 
    */
    'expired'?: boolean;
    /**
    * The time it takes for initiative (Chat Control) to return to the Primary Channel (the time that the module channel stays on the Active Channel). The value is specified in seconds. The maximum value is one year (3600 * 24 * 365). The default value is 3600 (1 hour).  * Ignored if the value of expired is false. 
    */
    'ttl'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean"
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AcquireChatControlRequest.attributeTypeMap;
    }
}

