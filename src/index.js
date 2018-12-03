import ArrayFormatter from "./formatters/array";
import CreditCardConverter from "./converters/creditCard";
import CreditCardFormatter from "./formatters/creditCard";
import CurrencyConverter from "./converters/currency";
import CurrencyFormatter from "./formatters/currency";
import DateConverter from "./converters/date";
import DateFormatter from "./formatters/date";
import EmailFormatter from "./formatters/email";
import HexConverter from "./converters/hex";
import HexFormatter from "./formatters/hex";
import MonthYearFormatter from "./formatters/monthYear";
import NameFormatter from "./formatters/name";
import NumberFormatter from "./formatters/number";
import PercentConverter from "./converters/percent";
import PercentFormatter from "./formatters/percent";
import PhoneConverter from "./converters/phone";
import PhoneFormatter from "./formatters/phone";
import PhoneStringConverter from "./converters/phoneString";
import PhoneStringFormatter from "./formatters/phoneString";
import RequiredFormatter from "./formatters/required";
import RgbFormatter from "./formatters/rgb";
import SsnConverter from "./converters/ssn";
import SsnFormatter from "./formatters/ssn";
import SsnLastFourFormatter from "./formatters/ssnLastFour";
import StringFormatter from "./formatters/string";
import TimeFormatter from "./formatters/time";
import WholeNumberFormatter from "./formatters/whole";

module.exports = {
  ArrayFormatter: ArrayFormatter,
  ArrayMask: require("./masks/array"),
  CreditCardConverter: CreditCardConverter,
  CreditCardFormatter: CreditCardFormatter,
  CreditCardMask: require("./masks/creditCard"),
  CurrencyConverter: CurrencyConverter,
  CurrencyFormatter: CurrencyFormatter,
  CurrencyMask: require("./masks/currency"),
  DecimalMask: require("./masks/decimal"),
  DateConverter: DateConverter,
  DateFormatter: DateFormatter,
  EmailFormatter: EmailFormatter,
  EmailMask: require("./masks/email"),
  EnglishTranslation: require("./utils/translations/en"),
  HexConverter: HexConverter,
  HexFormatter: HexFormatter,
  HexMask: require("./masks/hex"),
  MonthYearFormatter: MonthYearFormatter,
  NameFormatter: NameFormatter,
  NumberFormatter: NumberFormatter,
  NumberMask: require("./masks/number"),
  PercentConverter: PercentConverter,
  PercentFormatter: PercentFormatter,
  PercentMask: require("./masks/percent"),
  PhoneConverter: PhoneConverter,
  PhoneFormatter: PhoneFormatter,
  PhoneMask: require("./masks/phone"),
  PhoneStringConverter: PhoneStringConverter,
  PhoneStringFormatter: PhoneStringFormatter,
  PhoneStringMask: require("./masks/phoneString"),
  RequiredFormatter: RequiredFormatter,
  RgbFormatter: RgbFormatter,
  SsnConverter: SsnConverter,
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
