import { isNil } from "lodash";

const EmailFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      parsed = parsed.toString().toLowerCase().trim();
      formatted = formatted.toString().toLowerCase().trim();
      // remove all non-digits
      if(!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/.test(formatted)) {
        errors.push("FormFormatters.emailInvalid");
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

module.exports = EmailFormatter;
