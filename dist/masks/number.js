"use strict";

var NumberMask = {
  mask: function mask(value) {
    return value.toString().replace(/[^0-9,.]+/g, "");
  }
};

module.exports = NumberMask;