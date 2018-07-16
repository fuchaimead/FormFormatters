"use strict";

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencyFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && !(0, _lodash.isEmpty)(value)) {
      var numObj = (0, _numeral2.default)(parsed.replace(/[$\s,]/g, "").trim());
      parsed = numObj.value();
      if (typeof parsed === "undefined" || parsed === null || isNaN(parsed)) {
        parsed = value;
        errors.push("FormFormatters.numberInvalid");
      } else {
        formatted = numObj.format("0,0.00");
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

module.exports = CurrencyFormatter;