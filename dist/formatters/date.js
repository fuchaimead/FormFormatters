"use strict";

var _date = require("../utils/date");

var _date2 = _interopRequireDefault(_date);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
      var temp = _date2.default.parse(parsed);
      if (temp.isValid()) {
        // store parsed value as just the date portion.
        parsed = temp.format("YYYY-MM-DD");
        formatted = temp.format("MMM D, YYYY");
      } else {
        errors.push("FormFormatters.dateInvalid");
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

module.exports = DateFormatter;