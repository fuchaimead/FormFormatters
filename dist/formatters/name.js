"use strict";

var _lodash = require("lodash");

var NameFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
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
  }
};

module.exports = NameFormatter;