"use strict";

var _lodash = require("lodash");

var SSNLastFourFormatter = {
  format: function format(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
      parsed = parsed.toString().replace(/\D/g, "").trim();
      formatted = parsed;

      if (parsed.length !== 4) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.last4Invalid");
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

module.exports = SSNLastFourFormatter;