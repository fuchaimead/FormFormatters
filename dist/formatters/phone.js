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
    // remove all non-digits
    parsed = parsed.toString().replace(/\D/g, "");
    formatted = parsed.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    if (parsed.length !== 10) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.phoneInvalid");
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

;