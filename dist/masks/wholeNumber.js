"use strict";

var WholeNumberMask = {
  mask: function mask(value) {
    return value.replace(/[^0-9]+/g, "");
  }
};

module.exports = WholeNumberMask;