import { isNil } from "lodash";

const CurrencyMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().replace(/[^0-9.,-]/g, ""));
  }
};

module.exports = CurrencyMask;
