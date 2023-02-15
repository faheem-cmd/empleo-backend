"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionRequestBody = void 0;
var CreateSubscriptionRequestBody = (function () {
    function CreateSubscriptionRequestBody() {
    }
    CreateSubscriptionRequestBody.getAttributeTypeMap = function () {
        return CreateSubscriptionRequestBody.attributeTypeMap;
    };
    CreateSubscriptionRequestBody.discriminator = undefined;
    CreateSubscriptionRequestBody.attributeTypeMap = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "SubscriptionObject",
            "format": ""
        },
        {
            "name": "retain_previous_owner",
            "baseName": "retain_previous_owner",
            "type": "boolean",
            "format": ""
        }
    ];
    return CreateSubscriptionRequestBody;
}());
exports.CreateSubscriptionRequestBody = CreateSubscriptionRequestBody;
//# sourceMappingURL=CreateSubscriptionRequestBody.js.map