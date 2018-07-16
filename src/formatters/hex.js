import { isNil } from "lodash";

const HexFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      parsed = parsed.toString().toUpperCase().trim();
      formatted = formatted.toString().toUpperCase().trim();
      // remove all non-digits
      if(/^(#([0-9a-fA-F]{2}){3}|([0-9a-fA-F]{2}){3})$/.test(formatted)) {
        if(parsed.length === 6 && parsed[0] !== "#") {
          parsed = "#" + parsed;
          formatted = "#" + formatted;
        }
        if(parsed.length !== 7) {
          errors.push("FormFormatters.hexInvalid");
        }
      } else {
        errors.push("FormFormatters.hexInvalid");
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

module.exports = HexFormatter;
