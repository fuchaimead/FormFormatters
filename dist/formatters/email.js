"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;

  var formatted = value;

  if (!(0, _lodash.isNil)(value) && value !== "") {
    parsed = parsed.toString().toLowerCase().trim();
    formatted = formatted.toString().toLowerCase().trim();
    // remove all non-digits
    if (!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(formatted)) {
      errors.push("FormFormatters.emailInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
};

var _lodash = require("lodash");