"use strict";

var _lodash = require("lodash");

var WholeNumberMask = {
  mask: function mask(value) {
    return (0, _lodash.isNil)(value) ? null : value.toString().replace(/[^0-9,]+/g, "");
  }
};

module.exports = WholeNumberMask;