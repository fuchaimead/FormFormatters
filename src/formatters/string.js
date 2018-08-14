import { isNil, isNumber } from "lodash";

export default function({errors, formatted, parsed}) {
  if(isNumber(formatted)) {
    formatted = formatted.toString();
  }

  if(!isNil(formatted) && formatted !== "") {
    formatted = formatted.toString().trim();
    parsed = formatted;
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
};
