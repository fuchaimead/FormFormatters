"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var formatterObj = { errors: [], formatted: value, parsed: value };
  return (0, _hex2.default)(formatterObj).formatted;
};

var _hex = require("../formatters/hex");

var _hex2 = _interopRequireDefault(_hex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }