import { isNil } from "lodash";

const SSNLastFourFormatter = {
  format(value, options = {}) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      parsed = parsed.toString().replace(/\D/g, "").trim();
      formatted = parsed;

      if(parsed.length !== 4) {
        parsed = value;
        formatted = value;
        errors.push("FormFormatters.last4Invalid");
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

module.exports = SSNLastFourFormatter;
