import { isNil } from "lodash";

const StringMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().replace(/[^0-9.%]+/g, ""));
  }
};

module.exports = StringMask;
