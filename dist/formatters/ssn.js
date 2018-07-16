"use strict";

var _lodash = require("lodash");

var SSNFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
      // remove all non-digits
      parsed = parsed.toString().replace(/\D/g, "");
      formatted = parsed.replace(/^(\d{3})(\d{2})(\d{4})$/, "$1-$2-$3");
      if (parsed.length !== 9) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.ssnInvalid");
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

module.exports = SSNFormatter;