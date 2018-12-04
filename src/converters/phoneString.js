import PhoneStringFormatter from "../formatters/phoneString";

export default function(value) {
  let formatterObj = {errors: [], formatted: value, parsed: value};
  return PhoneStringFormatter(formatterObj).formatted;
}
