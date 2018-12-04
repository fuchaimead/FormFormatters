"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var formatterObj = { errors: [], formatted: value, parsed: value };
  return (0, _phoneString2.default)(formatterObj).formatted;
};

var _phoneString = require("../formatters/phoneString");

var _phoneString2 = _interopRequireDefault(_phoneString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }