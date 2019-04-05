"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (modules) {
    var Query = {};
    // let Mutation = {};
    // let Subscription = {};
    // let resolverMap = {};
    Object.keys(modules).forEach(function (key) {
        Query = __assign({}, Query, modules[key].Query);
        // Mutation = { ...Mutation, ...modules[key].Mutation };
        // Subscription = { ...Subscription, ...modules[key].Subscription };
        // resolverMap = { ...resolverMap, ...modules[key].resolverMap };
    });
    return {
        // Mutation,
        Query: Query,
    };
});
