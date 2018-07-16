import Numeral from "numeral";
import { isEmpty, isNil } from "lodash";

const CurrencyFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && !isEmpty(value)) {
      let numObj = Numeral(parsed.replace(/[$\s,]/g, "").trim());
      parsed = numObj.value()
      if(typeof(parsed) === "undefined" || parsed === null || isNaN(parsed)) {
        parsed = value;
        errors.push("FormFormatters.numberInvalid");
      } else {
        formatted = numObj.format("0,0.00");
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

module.exports = CurrencyFormatter;
