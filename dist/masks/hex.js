"use strict";

var _lodash = require("lodash");

var HexMask = {
  mask: function mask(value) {
    return (0, _lodash.isNil)(value) ? null : value.toString().toUpperCase().replace(/[^#A-F0-9]+/g, "");
  }
};

module.exports = HexMask;