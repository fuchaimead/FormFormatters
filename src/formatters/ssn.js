import { isNil } from "lodash";

const SSNFormatter = {
  format(value, options = {}) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      // remove all non-digits
      parsed = parsed.toString().replace(/\D/g, "");
      formatted = parsed.replace(/^(\d{3})(\d{2})(\d{4})$/, "$1-$2-$3");
      if(parsed.length !== 9) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.ssnInvalid");
      }
    }

    return({
      valid: errors.length === 0,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = SSNFormatter;
