"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdentityRequestBody = void 0;
var UserIdentityRequestBody = (function () {
    function UserIdentityRequestBody() {
    }
    UserIdentityRequestBody.getAttributeTypeMap = function () {
        return UserIdentityRequestBody.attributeTypeMap;
    };
    UserIdentityRequestBody.discriminator = undefined;
    UserIdentityRequestBody.attributeTypeMap = [
        {
            "name": "identity",
            "baseName": "identity",
            "type": "{ [key: string]: any; }",
            "format": ""
        }
    ];
    return UserIdentityRequestBody;
}());
exports.UserIdentityRequestBody = UserIdentityRequestBody;
//# sourceMappingURL=UserIdentityRequestBody.js.map