"use strict";

var _lodash = require("lodash");

var RequiredFormatter = {
  format: function format(value) {
    var errors = [];
    if ((0, _lodash.isNil)(value) || (0, _lodash.isArray)(value) && (0, _lodash.isEmpty)(value) || value === "" || value === false) {
      errors.push("FormFormatters.required");
    }

    return {
      valid: errors.length === 0,
      formatted: value,
      parsed: value,
      errors: errors
    };
  }
};

module.exports = RequiredFormatter;