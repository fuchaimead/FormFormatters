import Moment from "moment";
import { isNil } from "lodash";

export default function({errors, formatted, parsed}) {
  if(!isNil(formatted) && formatted !== "") {
    let temp = Moment(parsed, "hh:mm:ss a");
    if(temp.isValid()) {
      formatted = temp.format("h:mm a");
      parsed = formatted;
    } else {
      errors.push("FormFormatters.timeInvalid");
    }
  }

  return({
    valid: errors.length === 0,
    parsed,
    formatted,
    errors
  });
};
