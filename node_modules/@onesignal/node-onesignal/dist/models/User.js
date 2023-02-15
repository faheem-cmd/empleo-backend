"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.attributeTypeMap = [
        {
            "name": "properties",
            "baseName": "properties",
            "type": "PropertiesObject",
            "format": ""
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<SubscriptionObject>",
            "format": ""
        },
        {
            "name": "subscription_options",
            "baseName": "subscription_options",
            "type": "UserSubscriptionOptions",
            "format": ""
        }
    ];
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map