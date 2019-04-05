"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Controller_1 = __importDefault(require("./Controller"));
var router = express_1.Router();
router
    .get('/', Controller_1.default.get)
    .post('/', Controller_1.default.post)
    .put('/', Controller_1.default.put)
    .delete('/:id', Controller_1.default.delete);
exports.default = router;
