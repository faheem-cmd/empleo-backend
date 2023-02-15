"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLiveActivityRequest = void 0;
var UpdateLiveActivityRequest = (function () {
    function UpdateLiveActivityRequest() {
    }
    UpdateLiveActivityRequest.getAttributeTypeMap = function () {
        return UpdateLiveActivityRequest.attributeTypeMap;
    };
    UpdateLiveActivityRequest.discriminator = undefined;
    UpdateLiveActivityRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "UpdateLiveActivityRequestNameEnum",
            "format": ""
        },
        {
            "name": "event",
            "baseName": "event",
            "type": "UpdateLiveActivityRequestEventEnum",
            "format": ""
        },
        {
            "name": "event_updates",
            "baseName": "event_updates",
            "type": "object",
            "format": ""
        },
        {
            "name": "dismiss_at",
            "baseName": "dismiss_at",
            "type": "number",
            "format": ""
        }
    ];
    return UpdateLiveActivityRequest;
}());
exports.UpdateLiveActivityRequest = UpdateLiveActivityRequest;
//# sourceMappingURL=UpdateLiveActivityRequest.js.map