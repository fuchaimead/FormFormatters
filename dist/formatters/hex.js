"use strict";

var _lodash = require("lodash");

var HexFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
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
  }
};

module.exports = HexFormatter;