"use strict";

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WholeFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
      parsed = (0, _numeral2.default)(parsed.replace(/[$\s,]/g, "").trim()).value();
      if (typeof parsed === "undefined" || parsed === null || isNaN(parsed)) {
        parsed = value;
        errors.push("FormFormatters.numberInvalid");
      } else {
        parsed = Math.round(parsed);
        formatted = parsed.toString();
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

module.exports = WholeFormatter;