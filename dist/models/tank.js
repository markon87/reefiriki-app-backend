"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.number.constructor.js");
var _mongoose = require("mongoose");
var tankSchema = new _mongoose.Schema({
  name: String,
  size: Number,
  owner: String,
  stocking: [String]
});
var _default = exports["default"] = (0, _mongoose.model)('Tank', tankSchema);