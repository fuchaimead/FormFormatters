import CreditCardFormatter from "../formatters/creditCard";

export default function(value) {
  let formatterObj = {errors: [], formatted: value, parsed: value};
  return CreditCardFormatter(formatterObj).formatted;
}
