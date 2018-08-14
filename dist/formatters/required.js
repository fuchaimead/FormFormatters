"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed,
      valid = _ref.valid;

  if ((0, _lodash.isNil)(formatted) || (0, _lodash.isArray)(formatted) && (0, _lodash.isEmpty)(formatted) || formatted === "" || formatted === false) {
    errors.push("FormFormatters.required");
  }

  return {
    valid: errors.length === 0,
    formatted: formatted,
    parsed: parsed,
    errors: errors
  };
};

var _lodash = require("lodash");