"use strict";

var StringMask = {
  mask: function mask(value) {
    return value.replace(/[^0-9.%]+/g, "");
  }
};

module.exports = StringMask;