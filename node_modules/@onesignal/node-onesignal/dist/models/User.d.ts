import { PropertiesObject } from './PropertiesObject';
import { SubscriptionObject } from './SubscriptionObject';
import { UserSubscriptionOptions } from './UserSubscriptionOptions';
export declare class User {
    'properties'?: PropertiesObject;
    'identity'?: {
        [key: string]: any;
    };
    'subscriptions'?: Array<SubscriptionObject>;
    'subscription_options'?: UserSubscriptionOptions;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
