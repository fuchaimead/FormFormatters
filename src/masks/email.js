import { isNil } from "lodash";

const EmailMask = {
  mask(value) {
    return(isNil(value) ? null : value.toString().toLowerCase());
  }
};

module.exports = EmailMask;
