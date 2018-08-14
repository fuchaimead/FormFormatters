# Form Formatters

[![CircleCI](https://circleci.com/gh/AlchemyAlcove/FormFormatters/tree/master.svg?style=svg&circle-token=8d93970e17263a753de9a3f15a8cd855b345b91b)](https://circleci.com/gh/AlchemyAlcove/FormFormatters/tree/master)
[![Feature Requests](http://feathub.com/AlchemyAlcove/FormFormatters?format=svg)](http://feathub.com/AlchemyAlcove/FormFormatters)

Formatters and masks for validating and manipulating user input.

Formatters take user input in an object and return an object representing user data, parsed data, and errors. For example if the user entered " 1112223333 " into a currency field. The response would be:

```json
{
  errors: [],
  formatted: "$1,112,223,333.00",
  parsed: 1112223333,
  valid: true
}
```

Entering "abc" into a currency field would result in:

```json
{
  error: ["FormFormatters.required"],
  formatted: "abc",
  parsed: "abc",
  valid: false
}
```

You might be thinking, but it's a number field how come the result has letters in it? Well the formatters job is to format the text and respond with whether it is valid. The masks job is to mask out values like letters from currency inputs. The mask should run before the formatter.

Data going into the formatters is structured the same going in as coming out that way they are chainable.

Converters take a parsed value (from the api) and convert them into a form usable value.

The mask will return in the the same format as the entry. In other words, it will not return in a complex object.

## Error Messaging

This library is designed for use with a translation tool. It will respond with unique keys representing error text. You could use [Simple Translator](https://github.com/AlchemyAlcove/SimpleTranslator) library for multi lingual support on error messages.

## Formatters

- ArrayFormatter
- CurrencyFormatter
- DateFormatter
- EmailFormatter
- HexFormatter
- NameFormatter
- NumberFormatter
- PercentFormatter
- PhoneFormatter
- RgbFormatter
- SsnLastFourFormatter
- StringFormatter
- TimeFormatter

## Masks

- ArrayMask
- CurrencyMask
- DecimalMask
- EmailMask
- HexMask
- NumberMask
- PercentMask
- PhoneMask
- SsnMask
- SsnLastFourMask
- StringMask
- TimeMask
- WholeNumberMask

## Converters

- DateConverter

## Releases

v1.0.3

Fixing formatters to work with same in same out object approach.

Added date converter.

v1.0.2

Added Array formatter and Array Mask

v1.0.1

Added Number mask


v0.4.1

Hex formatter now includes a # symbol at the beginning of the string.


v0.4.0

- Add credit card formatter
