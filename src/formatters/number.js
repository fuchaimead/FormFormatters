import Numeral from "numeral";
import { isNil } from "lodash";

const NumberFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      parsed = Numeral(parsed.toString().replace(/[$\s,]/g, "").trim()).value();
      if(typeof(parsed) === "undefined" || parsed === null || isNaN(parsed)) {
        parsed = value;
        errors.push("FormFormatters.numberInvalid");
      } else {
        formatted = parsed.toString();
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

module.exports = NumberFormatter;
