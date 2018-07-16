"use strict";

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RgbFormatter = {
  format: function format(value) {
    var parsed = value;
    var formatted = value;
    var errors = [];

    if (!(0, _lodash.isNil)(value) && value !== "") {
      parsed = (0, _numeral2.default)(parsed.toString().trim()).value();
      if ((0, _lodash.isNil)(parsed) || isNaN(parsed)) {
        parsed = value;
      } else if (parsed > 255 || parsed < 0) {
        parsed = value;
        errors.push("FormFormatters.rgbInvalid");
      } else {
        formatted = parsed;
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

module.exports = RgbFormatter;