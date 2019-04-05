"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var path_1 = require("path");
var configuration_1 = require("./configuration");
var libs_1 = require("./libs");
var modules = __importStar(require("./modules"));
var schema = {
    resolvers: libs_1.mergeResolver(modules),
    typeDefs: libs_1.mergeSchema(path_1.resolve(__dirname, '../../src/**/*.graphql')),
};
var server = new libs_1.Server(configuration_1.configuration);
server.setupApolloServer({ schema: graphql_tools_1.makeExecutableSchema(schema) });
