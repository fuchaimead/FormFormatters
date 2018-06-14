import StrFormatter from "./string";

const HexFormatter = {
  format(value, options = {}) {
    let{valid, parsed, formatted, errors} = StrFormatter.format(value, options);

    parsed = parsed.toUpperCase().trim();
    formatted = formatted.toUpperCase().trim();
    if(valid && parsed.length > 0) {
      // remove all non-digits
      let hexRegex = /^(#([0-9a-fA-F]{2}){3}|([0-9a-fA-F]{2}){3})$/;
      valid = hexRegex.test(formatted);
      if(parsed.length === 6 && parsed[0] !== "#") {
        parsed = "#" + parsed;
        formatted = "#" + formatted;
      }
      if(parsed.length !== 7) {
        valid = false;
      }
      if(!valid) {
        errors.push("FormFormatters.hexInvalid");
      }
    }

    return({
      valid,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = HexFormatter;
