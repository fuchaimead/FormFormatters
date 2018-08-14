import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

  if(!isNil(value) && value !== "") {
    // remove all non-digits
    parsed = parsed.toString().replace(/\D/g, "");
    formatted = parsed.replace(/^(\d{3})(\d{2})(\d{4})$/, "$1-$2-$3");
    if(parsed.length !== 9) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.ssnInvalid");
    }
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
};
