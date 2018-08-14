"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (!(0, _lodash.isNil)(value) && value !== "") {
    var temp = _moment2.default.unix(value).utc();
    if (temp.isValid()) {
      value = temp.clone().format("MMM D, YYYY");
    }
  }

  return value;
};

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }