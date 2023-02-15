"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayerSuccessResponse = void 0;
var CreatePlayerSuccessResponse = (function () {
    function CreatePlayerSuccessResponse() {
    }
    CreatePlayerSuccessResponse.getAttributeTypeMap = function () {
        return CreatePlayerSuccessResponse.attributeTypeMap;
    };
    CreatePlayerSuccessResponse.discriminator = undefined;
    CreatePlayerSuccessResponse.attributeTypeMap = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }
    ];
    return CreatePlayerSuccessResponse;
}());
exports.CreatePlayerSuccessResponse = CreatePlayerSuccessResponse;
//# sourceMappingURL=CreatePlayerSuccessResponse.js.map