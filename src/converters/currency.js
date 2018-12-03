import CurrencyFormatter from "../formatters/currency";
import { isNil } from "lodash";

export default function(value) {
  if(!isNil(value)) {
    value = value.toString();
  }
  let formatterObj = {errors: [], formatted: value, parsed: value};
  return CurrencyFormatter(formatterObj).formatted;
}
