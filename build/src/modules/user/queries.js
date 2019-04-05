"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Query = {
    helloworld: function () {
        axios_1.default
            .get('http://localhost:9000/api/user')
            .then(function (response) {
            console.log(response.data);
            return response.data;
        })
            .catch(function (error) {
            console.log(error);
        });
    },
};
exports.default = Query;
