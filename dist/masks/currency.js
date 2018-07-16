"use strict";

var CurrencyMask = {
  mask: function mask(value) {
    return value.replace(/[^0-9.,]/g, "");
  }
};

module.exports = CurrencyMask;