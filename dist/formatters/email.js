"use strict";

var _lodash = require("lodash");

var EmailFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

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
  }
};

module.exports = EmailFormatter;