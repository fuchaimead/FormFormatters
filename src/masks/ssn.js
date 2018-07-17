import { isNil } from "lodash";

const SsnMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().replace(/[^0-9-\s]+/g, ""));
  }
};

module.exports = SsnMask;
