import ArrayFormatter from "./formatters/array";
import CreditCardFormatter from "./formatters/creditCard";
import CurrencyFormatter from "./formatters/currency";
import DateConverter from "./converters/date";
import DateFormatter from "./formatters/date";
import EmailFormatter from "./formatters/email";
import HexFormatter from "./formatters/hex";
import MonthYearFormatter from "./formatters/monthYear";
import NameFormatter from "./formatters/name";
import NumberFormatter from "./formatters/number";
import PercentFormatter from "./formatters/percent";
import PhoneFormatter from "./formatters/phone";
import RequiredFormatter from "./formatters/required";
import RgbFormatter from "./formatters/rgb";
import SsnFormatter from "./formatters/ssn";
import SsnLastFourFormatter from "./formatters/ssnLastFour";
import StringFormatter from "./formatters/string";
import TimeFormatter from "./formatters/time";
import WholeNumberFormatter from "./formatters/whole";

module.exports = {
  ArrayFormatter: ArrayFormatter,
  ArrayMask: require("./masks/array"),
  CreditCardFormatter: CreditCardFormatter,
  CreditCardMask: require("./masks/creditCard"),
  CurrencyFormatter: CurrencyFormatter,
  CurrencyMask: require("./masks/currency"),
  DecimalMask: require("./masks/decimal"),
  DateConverter: DateConverter,
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
  PercentFormatter: PercentFormatter,
  PercentMask: require("./masks/percent"),
  PhoneFormatter: PhoneFormatter,
  PhoneMask: require("./masks/phone"),
  RequiredFormatter: RequiredFormatter,
  RgbFormatter: RgbFormatter,
  SsnFormatter: SsnFormatter,
  SsnMask: require("./masks/ssn"),
  SsnLastFourFormatter: SsnLastFourFormatter,
  SsnLastFourMask: require("./masks/ssnLastFour"),
  StringFormatter: StringFormatter,
  StringMask: require("./masks/string"),
  TimeFormatter: TimeFormatter,
  TimeMask: require("./masks/time"),
  WholeNumberFormatter: WholeNumberFormatter,
  WholeNumberMask: require("./masks/wholeNumber")
};
