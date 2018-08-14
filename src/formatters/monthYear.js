import date from "../utils/date";
import { isNil } from "lodash";

export default function({errors, formatted, parsed}) {
  if(!isNil(formatted) && formatted !== "") {
    let temp = date.parse(parsed);
    if(temp.isValid()) {
      // store parsed value as just the date portion.
      parsed = temp.format("YYYY-MM-DD");
      formatted = temp.format("MMM YYYY");
    } else {
      errors.push("FormFormatters.dateInvalid");
    }
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
};
