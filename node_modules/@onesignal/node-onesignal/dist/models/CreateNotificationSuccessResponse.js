"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationSuccessResponse = void 0;
var CreateNotificationSuccessResponse = (function () {
    function CreateNotificationSuccessResponse() {
    }
    CreateNotificationSuccessResponse.getAttributeTypeMap = function () {
        return CreateNotificationSuccessResponse.attributeTypeMap;
    };
    CreateNotificationSuccessResponse.discriminator = undefined;
    CreateNotificationSuccessResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "number",
            "format": ""
        },
        {
            "name": "external_id",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Notification200Errors",
            "format": ""
        }
    ];
    return CreateNotificationSuccessResponse;
}());
exports.CreateNotificationSuccessResponse = CreateNotificationSuccessResponse;
//# sourceMappingURL=CreateNotificationSuccessResponse.js.map