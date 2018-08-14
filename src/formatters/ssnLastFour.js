import { isNil } from "lodash";

export default function({errors, formatted: value, parsed}) {
  let formatted = value;

  if(!isNil(value) && value !== "") {
    parsed = parsed.toString().replace(/\D/g, "").trim();
    formatted = parsed;

    if(parsed.length !== 4) {
      parsed = value;
      formatted = value;
      errors.push("FormFormatters.last4Invalid");
    }
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
};
