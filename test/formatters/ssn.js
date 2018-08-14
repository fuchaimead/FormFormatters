import test from "ava";
import { SsnFormatter } from "../../src";

test("accepts null", t => {
  t.deepEqual(SsnFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(SsnFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(SsnFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: ["FormFormatters.ssnInvalid"],
    formatted: 23,
    parsed: 23,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(SsnFormatter({errors: [], valid: true, formatted: " 123456789 ", parsed: " 123456789 "}), {
    errors: [],
    formatted: "123-45-6789",
    parsed: "123456789",
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(SsnFormatter({errors: [], valid: true, formatted: "111223333", parsed: "111223333"}), {
    errors: [],
    formatted: "111-22-3333",
    parsed: "111223333",
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(SsnFormatter({errors: [], valid: true, formatted: "11122333", parsed: "11122333"}), {
    errors: ["FormFormatters.ssnInvalid"],
    formatted: "11122333",
    parsed: "11122333",
    valid: false
  });
});
