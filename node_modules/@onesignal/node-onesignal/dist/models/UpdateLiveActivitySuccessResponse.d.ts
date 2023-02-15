import { Notification200Errors } from './Notification200Errors';
export declare class UpdateLiveActivitySuccessResponse {
    'notification_id'?: string;
    'errors'?: Notification200Errors;
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
