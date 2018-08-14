"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      value = _ref.formatted,
      parsed = _ref.parsed;

  var formatted = value;

  if (!(0, _lodash.isNil)(value) && value !== "") {
    parsed = (0, _numeral2.default)(parsed.toString().replace(/[$\s,]/g, "").trim()).value();
    if (typeof parsed === "undefined" || parsed === null || isNaN(parsed)) {
      parsed = value;
      errors.push("FormFormatters.numberInvalid");
    } else {
      formatted = parsed.toString();
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
};

var _numeral = require("numeral");

var _numeral2 = _interopRequireDefault(_numeral);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }