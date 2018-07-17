"use strict";

var _lodash = require("lodash");

var EmailMask = {
  mask: function mask(value) {
    return (0, _lodash.isNil)(value) ? null : value.toString().toLowerCase();
  }
};

module.exports = EmailMask;