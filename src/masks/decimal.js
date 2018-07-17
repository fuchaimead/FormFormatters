import { isNil } from "lodash";

const DecimalMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().replace(/[^0-9,.]+/g, ""));
  }
};

module.exports = DecimalMask;
