import { NumberFormatter } from "../../src";
import test from "ava";

test("converts null", t => {
  t.deepEqual(NumberFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("returns an empty string", t => {
  t.deepEqual(NumberFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(NumberFormatter({errors: [], valid: true, formatted: " 1112223333", parsed: " 1112223333 "}), {
    errors: [],
    formatted: "1112223333",
    parsed: 1112223333,
    valid: true
  });
});

test("handles letters", t => {
  t.deepEqual(NumberFormatter({errors: [], valid: true, formatted: "111asdf222333.23", parsed: "111asdf222333.23"}), {
    errors: [],
    formatted: "111222333.23",
    parsed: 111222333.23,
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(NumberFormatter({errors: [], valid: true, formatted: "111.222333.23", parsed: "111.222333.23"}), {
    errors: ["FormFormatters.numberInvalid"],
    formatted: "111.222333.23",
    parsed: "111.222333.23",
    valid: false
  });
});
