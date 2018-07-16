"use strict";

var HexMask = {
  mask: function mask(value) {
    return value.toUpperCase().replace(/[^#A-F0-9]+/g, "");
  }
};

module.exports = HexMask;