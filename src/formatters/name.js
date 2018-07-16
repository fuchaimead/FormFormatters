import { isNil } from "lodash";

const NameFormatter = {
  format(value) {
    let parsed = value;
    let formatted = value;
    let errors = [];

    if(!isNil(value) && value !== "") {
      parsed = parsed.toString().toLowerCase().trim();
      formatted = formatted.toString().toLowerCase().trim();
      let arr = parsed.split(" ").map((item) => {
        return(item.charAt(0).toUpperCase() + item.slice(1));
      });
      parsed = arr.join(" ");
      formatted = parsed;
    }

    return({
      valid: errors.length === 0,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = NameFormatter;
