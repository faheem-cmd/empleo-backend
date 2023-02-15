"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdentityResponse = void 0;
var UserIdentityResponse = (function () {
    function UserIdentityResponse() {
    }
    UserIdentityResponse.getAttributeTypeMap = function () {
        return UserIdentityResponse.attributeTypeMap;
    };
    UserIdentityResponse.discriminator = undefined;
    UserIdentityResponse.attributeTypeMap = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "{ [key: string]: any; }",
            "format": ""
        }
    ];
    return UserIdentityResponse;
}());
exports.UserIdentityResponse = UserIdentityResponse;
//# sourceMappingURL=UserIdentityResponse.js.map