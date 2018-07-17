import { isNil } from "lodash";

const NumberMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().replace(/[^0-9,.]+/g, ""));
  }
};

module.exports = NumberMask;
