"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (!(0, _lodash.isNil)(value)) {
    value = value.toString();
  }
  var formatterObj = { errors: [], formatted: value, parsed: value };
  return (0, _currency2.default)(formatterObj).formatted;
};

var _currency = require("../formatters/currency");

var _currency2 = _interopRequireDefault(_currency);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }