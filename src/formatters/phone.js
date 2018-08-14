import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

  if(!isNil(value) && value !== "") {
    // remove all non-digits
    parsed = parsed.toString().replace(/\D/g, "");
    formatted = parsed.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    if(parsed.length !== 10) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.phoneInvalid");
    }
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
};
