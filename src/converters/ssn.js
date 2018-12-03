import SsnFormatter from "../formatters/ssn";

export default function(value) {
  let formatterObj = {errors: [], formatted: value, parsed: value};
  return SsnFormatter(formatterObj).formatted;
}
