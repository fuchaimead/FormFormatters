"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var errors = _ref.errors,
      formatted = _ref.formatted,
      parsed = _ref.parsed;

  if (!(0, _lodash.isNil)(formatted) && formatted !== "") {
    var temp = (0, _moment2.default)(parsed, "hh:mm:ss a");
    if (temp.isValid()) {
      formatted = temp.format("h:mm a");
      parsed = formatted;
    } else {
      errors.push("FormFormatters.timeInvalid");
    }
  }

  return {
    valid: errors.length === 0,
    parsed: parsed,
    formatted: formatted,
    errors: errors
  };
};

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;