import HexFormatter from "../formatters/hex";

export default function(value) {
  let formatterObj = {errors: [], formatted: value, parsed: value};
  return HexFormatter(formatterObj).formatted;
}
