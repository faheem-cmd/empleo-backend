"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginLiveActivityRequest = void 0;
var BeginLiveActivityRequest = (function () {
    function BeginLiveActivityRequest() {
    }
    BeginLiveActivityRequest.getAttributeTypeMap = function () {
        return BeginLiveActivityRequest.attributeTypeMap;
    };
    BeginLiveActivityRequest.discriminator = undefined;
    BeginLiveActivityRequest.attributeTypeMap = [
        {
            "name": "push_token",
            "baseName": "push_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscription_id",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        }
    ];
    return BeginLiveActivityRequest;
}());
exports.BeginLiveActivityRequest = BeginLiveActivityRequest;
//# sourceMappingURL=BeginLiveActivityRequest.js.map