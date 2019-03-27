import test from "ava";
import { PhoneStringFormatter } from "../../src";

test("converts null", t => {
  t.deepEqual(PhoneStringFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("returns an error if empty string", t => {
  t.deepEqual(PhoneStringFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(PhoneStringFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: ["FormFormatters.phoneInvalid"],
    formatted: 23,
    parsed: 23,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(PhoneStringFormatter({errors: [], valid: true, formatted: " 1112223333 ", parsed: " 1112223333 "}), {
    errors: [],
    formatted: "(111) 222-3333",
    parsed: "(111) 222-3333",
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(PhoneStringFormatter({errors: [], valid: true, formatted: "1112223333", parsed: "1112223333"}), {
    errors: [],
    formatted: "(111) 222-3333",
    parsed: "(111) 222-3333",
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(PhoneStringFormatter({errors: [], valid: true, formatted: "111222333", parsed: "111222333"}), {
    errors: ["FormFormatters.phoneInvalid"],
    formatted: "111222333",
    parsed: "111222333",
    valid: false
  });
});
