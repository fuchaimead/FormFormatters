import date from "../utils/date";
import { isNil } from "lodash";

export default function({errors, formatted, parsed}) {
  if(!isNil(formatted) && formatted !== "") {
    let temp = date.parse(formatted);
    if(temp.isValid()) {
      parsed = temp.clone().unix();
      formatted = temp.clone().format("MMM D, YYYY");
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
}
