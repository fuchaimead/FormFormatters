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
    var sanitized = value.toString().replace(/\D/g, "");
    formatted = sanitized.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    parsed = formatted;

    if (parsed.length !== 14) {
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