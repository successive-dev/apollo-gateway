"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var glob_1 = require("glob");
function getGlob(pattern) {
    return glob_1.sync(pattern);
}
function readFile(fileName) {
    return fs_1.default.readFileSync(fileName, 'utf8');
}
function makeSchema(fileNames) {
    return fileNames.map(readFile);
}
function default_1(pattern) {
    try {
        var files = getGlob(pattern);
        var schemaFile = makeSchema(files);
        return schemaFile;
    }
    catch (err) {
        return err;
    }
}
exports.default = default_1;
