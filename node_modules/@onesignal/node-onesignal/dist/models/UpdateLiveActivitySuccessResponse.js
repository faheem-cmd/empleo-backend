"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLiveActivitySuccessResponse = void 0;
var UpdateLiveActivitySuccessResponse = (function () {
    function UpdateLiveActivitySuccessResponse() {
    }
    UpdateLiveActivitySuccessResponse.getAttributeTypeMap = function () {
        return UpdateLiveActivitySuccessResponse.attributeTypeMap;
    };
    UpdateLiveActivitySuccessResponse.discriminator = undefined;
    UpdateLiveActivitySuccessResponse.attributeTypeMap = [
        {
            "name": "notification_id",
            "baseName": "notification_id",
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
    return UpdateLiveActivitySuccessResponse;
}());
exports.UpdateLiveActivitySuccessResponse = UpdateLiveActivitySuccessResponse;
//# sourceMappingURL=UpdateLiveActivitySuccessResponse.js.map