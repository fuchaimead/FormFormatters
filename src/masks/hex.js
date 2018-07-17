import { isNil } from "lodash";

const HexMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().toUpperCase().replace(/[^#A-F0-9]+/g, ""));
  }
};

module.exports = HexMask;
