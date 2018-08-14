"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!(0, _lodash.isNil)(formatted) && formatted !== "") {
    parsed = parsed.toString().toUpperCase().trim();
    formatted = formatted.toString().toUpperCase().trim();
    // remove all non-digits
    if (/^(#([0-9a-fA-F]{2}){3}|([0-9a-fA-F]{2}){3})$/.test(formatted)) {
      if (parsed.length === 6 && parsed[0] !== "#") {
        parsed = "#" + parsed;
        formatted = "#" + formatted;
      }
      if (parsed.length !== 7) {
        errors.push("FormFormatters.hexInvalid");
      }
    } else {
      errors.push("FormFormatters.hexInvalid");
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