import Moment from "moment";
import { isNil } from "lodash";

const TimeFormatter = {
  format(value, options = {}) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
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
  }
};

module.exports = TimeFormatter;
