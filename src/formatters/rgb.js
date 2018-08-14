import Numeral from "numeral";
import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

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
};
