"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  var formatterObj = { errors: [], formatted: value, parsed: value };
  return (0, _creditCard2.default)(formatterObj).formatted;
};

var _creditCard = require("../formatters/creditCard");

var _creditCard2 = _interopRequireDefault(_creditCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }