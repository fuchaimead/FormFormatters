import { isArray, isEmpty, isNil } from "lodash";

const RequiredFormatter = {
  format(value) {
    let errors = [];
    if(isNil(value) || (isArray(value) && isEmpty(value)) || value === "" || value === false) {
      errors.push("FormFormatters.required");
    }

    return({
      valid: errors.length === 0,
      formatted: value,
      parsed: value,
      errors
    });
  }
};

module.exports = RequiredFormatter;
