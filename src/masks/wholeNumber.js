import { isNil } from "lodash";

const WholeNumberMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().replace(/[^0-9,]+/g, ""));
  }
};

module.exports = WholeNumberMask;
