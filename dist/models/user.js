"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  username: {
    type: String,
    "default": null
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  tanks: {
    type: Array
  }
});
var _default = exports["default"] = (0, _mongoose.model)("User", userSchema);