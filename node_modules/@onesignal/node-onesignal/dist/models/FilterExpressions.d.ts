export declare class FilterExpressions {
    'field': string;
    'key'?: string;
    'value'?: string;
    'relation': FilterExpressionsRelationEnum;
    'operator'?: FilterExpressionsOperatorEnum;
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
export type FilterExpressionsRelationEnum = ">" | "<" | "=" | "!=" | "exists" | "not_exists" | "time_elapsed_gt" | "time_elapsed_lt";
export type FilterExpressionsOperatorEnum = "OR" | "AND";
