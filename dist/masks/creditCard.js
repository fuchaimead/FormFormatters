"use strict";

var CreditCardMask = {
  mask: function mask(value) {
    return value.replace(/[^0-9-\s]+/g, "");
  }
};

module.exports = CreditCardMask;