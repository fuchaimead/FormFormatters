"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var formatterObj = { errors: [], formatted: value, parsed: value };
  return (0, _percent2.default)(formatterObj).formatted;
};

var _percent = require("../formatters/percent");

var _percent2 = _interopRequireDefault(_percent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }