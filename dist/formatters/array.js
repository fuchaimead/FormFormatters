"use strict";

var ArrayFormatter = {
  format: function format(value) {
    var formatted = value;
    var parsed = value;
    var errors = [];

    return {
      valid: true,
      parsed: parsed,
      formatted: formatted,
      errors: errors
    };
  }
};

module.exports = ArrayFormatter;