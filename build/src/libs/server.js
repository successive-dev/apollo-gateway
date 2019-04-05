"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server(config) {
        this.app = express_1.default();
    }
    Server.prototype.setupApolloServer = function (schema) {
        this.server = new apollo_server_express_1.ApolloServer(schema);
    };
    return Server;
}());
exports.Server = Server;
