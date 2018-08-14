import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

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
