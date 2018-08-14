import test from "ava";
import { CreditCardFormatter } from "../../src";

test("converts null", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if blank", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: ["FormFormatters.creditCardInvalid"],
    formatted: 23,
    parsed: 23,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: " 1234 5678 9012 3456 ", parsed: " 1234 5678 9012 3456 "}), {
    errors: [],
    formatted: "1234 5678 9012 3456",
    parsed: "1234567890123456",
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "1111222233334444", parsed: "1111222233334444"}), {
    errors: [],
    formatted: "1111 2222 3333 4444",
    parsed: "1111222233334444",
    valid: true
  });
});

test("formats strings with spaces", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "1111 2222 3333 4444", parsed: "1111 2222 3333 4444"}), {
    errors: [],
    formatted: "1111 2222 3333 4444",
    parsed: "1111222233334444",
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "11122333", parsed: "11122333"}), {
    errors: ["FormFormatters.creditCardInvalid"],
    formatted: "11122333",
    parsed: "11122333",
    valid: false
  });
});

test("is valid AMEX card starting with 34", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "3411 111111 11111", parsed: "3411 111111 11111"}), {
    errors: [],
    formatted: "3411 111111 11111",
    parsed: "341111111111111",
    valid: true
  });
});

test("is valid AMEX card starting with 37", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "3711 111111 11111", parsed: "3711 111111 11111"}), {
    errors: [],
    formatted: "3711 111111 11111",
    parsed: "371111111111111",
    valid: true
  });
});

test("is invalid AMEX card starting with 34", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "3411", parsed: "3411"}), {
    errors: ["FormFormatters.amexCreditCardInvalid"],
    formatted: "3411",
    parsed: "3411",
    valid: false
  });
});

test("is invalid AMEX card starting with 37", t => {
  t.deepEqual(CreditCardFormatter({errors: [], valid: true, formatted: "3711", parsed: "3711"}), {
    errors: ["FormFormatters.amexCreditCardInvalid"],
    formatted: "3711",
    parsed: "3711",
    valid: false
  });
});
