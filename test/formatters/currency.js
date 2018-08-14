import { CurrencyFormatter } from "../../src";
import test from "ava";

test("converts null", t => {
  t.deepEqual(CurrencyFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("returns a empty string", t => {
  t.deepEqual(CurrencyFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(CurrencyFormatter({errors: [], valid: true, formatted: " 1112223333 ", parsed: " 1112223333 "}), {
    errors: [],
    formatted: "1,112,223,333.00",
    parsed: 1112223333,
    valid: true
  });
});

test("formats cents", t => {
  t.deepEqual(CurrencyFormatter({errors: [], valid: true, formatted: "$5.14", parsed: "$5.14"}), {
    errors: [],
    formatted: "5.14",
    parsed: 5.14,
    valid: true
  });
});

test("formats cents", t => {
  t.deepEqual(CurrencyFormatter({errors: [], valid: true, formatted: "5", parsed: "5"}), {
    errors: [],
    formatted: "5.00",
    parsed: 5.00,
    valid: true
  });
});

test("(doesn't) handle errors", t => {
  t.deepEqual(CurrencyFormatter({errors: [], valid: true, formatted: "abc", parsed: "abc"}), {
    errors: ["FormFormatters.numberInvalid"],
    formatted: "abc",
    parsed: "abc",
    valid: false
  });
});
