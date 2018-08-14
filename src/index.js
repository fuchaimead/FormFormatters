import ArrayFormatter from "./formatters/array";
import CreditCardFormatter from "./formatters/creditCard";
import CurrencyFormatter from "./formatters/currency";
import DateFormatter from "./formatters/date";
import EmailFormatter from "./formatters/email";
import HexFormatter from "./formatters/hex";
import MonthYearFormatter from "./formatters/monthYear";
import NameFormatter from "./formatters/name";
import NumberFormatter from "./formatters/number";
import PhoneFormatter from "./formatters/phone";
import RequiredFormatter from "./formatters/required";

module.exports = {
  ArrayFormatter: ArrayFormatter,
  ArrayMask: require("./masks/array"),
  CreditCardFormatter: CreditCardFormatter,
  CreditCardMask: require("./masks/creditCard"),
  CurrencyFormatter: CurrencyFormatter,
  CurrencyMask: require("./masks/currency"),
  DecimalMask: require("./masks/decimal"),
  DateFormatter: DateFormatter,
  EmailFormatter: EmailFormatter,
  EmailMask: require("./masks/email"),
  EnglishTranslation: require("./utils/translations/en"),
  HexFormatter: HexFormatter,
  HexMask: require("./masks/hex"),
  MonthYearFormatter: MonthYearFormatter,
  NameFormatter: NameFormatter,
  NumberFormatter: NumberFormatter,
  NumberMask: require("./masks/number"),
  PercentFormatter: require("./formatters/percent"),
  PercentMask: require("./masks/percent"),
  PhoneFormatter: PhoneFormatter,
  PhoneMask: require("./masks/phone"),
  RequiredFormatter: RequiredFormatter,
  RgbFormatter: require("./formatters/rgb"),
  SsnFormatter: require("./formatters/ssn"),
  SsnMask: require("./masks/ssn"),
  SsnLastFourFormatter: require("./formatters/ssnLastFour"),
  SsnLastFourMask: require("./masks/ssnLastFour"),
  StringFormatter: require("./formatters/string"),
  StringMask: require("./masks/string"),
  TimeFormatter: require("./formatters/time"),
  TimeMask: require("./masks/time"),
  WholeNumberFormatter: require("./formatters/whole"),
  WholeNumberMask: require("./masks/wholeNumber")
};
