"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var formatterObj = { errors: [], formatted: value, parsed: value };
  return (0, _ssn2.default)(formatterObj).formatted;
};

var _ssn = require("../formatters/ssn");

var _ssn2 = _interopRequireDefault(_ssn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }