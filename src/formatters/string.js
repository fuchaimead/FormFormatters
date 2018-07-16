import { isNil, isNumber } from "lodash";

const StringFormatter = {
  format(value) {
    if(isNumber(value)) {
      value = value.toString();
    }

    let formatted = value;
    let parsed = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      formatted = formatted.toString().trim();
      parsed = formatted;
    }

    return({
      valid: errors.length === 0,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = StringFormatter;
