import { isArray, isEmpty, isNil } from "lodash";

export default function({errors, formatted, parsed, valid}) {
  if(isNil(formatted) || (isArray(formatted) && isEmpty(formatted)) || formatted === "" || formatted === false) {
    errors.push("FormFormatters.required");
  }

  return({
    valid: errors.length === 0,
    formatted: formatted,
    parsed: parsed,
    errors
  });
}
