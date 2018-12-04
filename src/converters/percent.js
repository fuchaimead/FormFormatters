import PercentFormatter from "../formatters/percent";

export default function(value) {
  let formatterObj = {errors: [], formatted: value, parsed: value};
  return PercentFormatter(formatterObj).formatted;
}
