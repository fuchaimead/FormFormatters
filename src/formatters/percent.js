import Numeral from "numeral";
import { isNil } from "lodash";

const PercentFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      let numObj = Numeral(parsed.toString().replace(/[$\s,%]/g, "").trim());
      parsed = numObj.value();
      if(typeof(parsed) === "undefined" || parsed === null || isNaN(parsed)) {
        parsed = value;
        errors.push("FormFormatters.numberInvalid");
      } else {
        if(parsed % 1 === 0) {
          formatted = numObj.format("0,0") + "%";
        } else {
          formatted = numObj.format("0,0.00") + "%";
        }
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

module.exports = PercentFormatter;
