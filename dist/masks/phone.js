"use strict";

var StringMask = {
  mask: function mask(value) {
    return value.replace(/[^0-9()-\s]+/g, "");
  }
};

module.exports = StringMask;