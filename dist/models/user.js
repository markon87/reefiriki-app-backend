"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  tanks: [String]
});
var _default = exports["default"] = (0, _mongoose.model)('User', userSchema);