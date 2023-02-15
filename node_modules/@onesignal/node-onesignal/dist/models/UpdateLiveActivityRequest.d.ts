export declare class UpdateLiveActivityRequest {
    'name': UpdateLiveActivityRequestNameEnum;
    'event': UpdateLiveActivityRequestEventEnum;
    'event_updates': object;
    'dismiss_at'?: number;
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
export type UpdateLiveActivityRequestNameEnum = "headings" | "contents" | "ios_sound" | "priority_level";
export type UpdateLiveActivityRequestEventEnum = "update" | "end";
