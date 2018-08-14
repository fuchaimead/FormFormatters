import numeral from "numeral";
import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

  if(!isNil(value) && value !== "") {
    parsed = numeral(parsed.replace(/[$\s,]/g, "").trim()).value();
    if(typeof(parsed) === "undefined" || parsed === null || isNaN(parsed)) {
      parsed = value;
      errors.push("FormFormatters.numberInvalid");
    } else {
      parsed = Math.round(parsed);
      formatted = parsed.toString();
    }
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
};
