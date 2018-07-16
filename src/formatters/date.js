import date from "../utils/date";
import { isNil } from "lodash";

const DateFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      let temp = date.parse(parsed);
      if(temp.isValid()) {
        // store parsed value as just the date portion.
        parsed = temp.format("YYYY-MM-DD");
        formatted = temp.format("MMM D, YYYY");
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
};

module.exports = DateFormatter;
