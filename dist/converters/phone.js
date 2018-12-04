"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var formatterObj = { errors: [], formatted: value, parsed: value };
  return (0, _phone2.default)(formatterObj).formatted;
};

var _phone = require("../formatters/phone");

var _phone2 = _interopRequireDefault(_phone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }