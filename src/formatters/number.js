import Numeral from "numeral";
import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

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
