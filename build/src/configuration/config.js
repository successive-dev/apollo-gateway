"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config();
var envVars = process.env;
exports.configuration = {
    port: envVars.PORT,
};
