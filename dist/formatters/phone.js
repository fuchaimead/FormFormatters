"use strict";

var _lodash = require("lodash");

var PhoneFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

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
  }
};

module.exports = PhoneFormatter;