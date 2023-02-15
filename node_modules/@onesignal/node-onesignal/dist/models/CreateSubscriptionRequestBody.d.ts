import { SubscriptionObject } from './SubscriptionObject';
export declare class CreateSubscriptionRequestBody {
    'subscription'?: SubscriptionObject;
    'retain_previous_owner'?: boolean;
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
