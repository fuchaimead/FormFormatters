import { isNil } from "lodash";

const CreditCardMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().replace(/[^0-9-\s]+/g, ""));
  }
};

module.exports = CreditCardMask;
