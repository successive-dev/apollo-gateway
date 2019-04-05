"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var user_1 = require("../services/user");
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
        this.app = express_1.default();
    }
    Server.prototype.setupApolloServer = function (schema) {
        var app = this.app;
        app.use("/api/user", user_1.userRouter);
        this.server = new apollo_server_express_1.ApolloServer(schema);
        this.server.applyMiddleware({ app: app, path: "/" });
        this.run();
    };
    Server.prototype.run = function () {
        var _this = this;
        this.app.listen(this.config.port, function () {
            console.log("Listening on port: " + _this.config.port);
        });
    };
    Server.prototype.initCors = function () {
        var corsOptions = {
            origin: "*",
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        };
        this.app.use(cors_1.default(corsOptions));
    };
    return Server;
}());
exports.default = Server;
