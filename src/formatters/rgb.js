import Numeral from "numeral";
import { isNil } from "lodash";

const RgbFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      parsed = Numeral(parsed.toString().trim()).value();
      if(isNil(parsed) || isNaN(parsed)) {
        parsed = value;
      } else if(parsed > 255 || parsed < 0) {
        parsed = value;
        errors.push("FormFormatters.rgbInvalid");
      } else {
        formatted = parsed;
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

module.exports = RgbFormatter;
