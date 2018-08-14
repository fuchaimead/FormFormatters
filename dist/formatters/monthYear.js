"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!(0, _lodash.isNil)(formatted) && formatted !== "") {
    var temp = _date2.default.parse(parsed);
    if (temp.isValid()) {
      // store parsed value as just the date portion.
      parsed = temp.format("YYYY-MM-DD");
      formatted = temp.format("MMM YYYY");
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
};

var _date = require("../utils/date");

var _date2 = _interopRequireDefault(_date);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;