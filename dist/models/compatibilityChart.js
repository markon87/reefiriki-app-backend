"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var compatibilityChartSchema = new _mongoose.Schema({
  family: String,
  compatible: [String],
  notCompatible: [String],
  cautionRequired: [String]
});
var _default = exports["default"] = (0, _mongoose.model)('CompatibilityChart', compatibilityChartSchema);