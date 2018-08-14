"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!(0, _lodash.isNil)(formatted) && formatted !== "") {
    parsed = parsed.toString().toLowerCase().trim();
    formatted = formatted.toString().toLowerCase().trim();
    var arr = parsed.split(" ").map(function (item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    parsed = arr.join(" ");
    formatted = parsed;
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