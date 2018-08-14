"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if ((0, _lodash.isNumber)(formatted)) {
    formatted = formatted.toString();
  }

  if (!(0, _lodash.isNil)(formatted) && formatted !== "") {
    formatted = formatted.toString().trim();
    parsed = formatted;
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
};

var _lodash = require("lodash");

;