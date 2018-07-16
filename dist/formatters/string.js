"use strict";

var _lodash = require("lodash");

var StringFormatter = {
  format: function format(value) {
    if ((0, _lodash.isNumber)(value)) {
      value = value.toString();
    }

    var formatted = value;
    var parsed = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
      formatted = formatted.toString().trim();
      parsed = formatted;
    }

    return {
      valid: errors.length === 0,
      parsed: parsed,
      formatted: formatted,
      errors: errors
    };
  }
};

module.exports = StringFormatter;