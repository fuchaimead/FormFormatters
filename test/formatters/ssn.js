import test from "ava";
import formatter from "../../src/formatters/ssn";

test("accepts null", t => {
  t.deepEqual(formatter.format(null), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(formatter.format(""), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(formatter.format(23), {
    errors: ["FormFormatters.ssnInvalid"],
    formatted: 23,
    parsed: 23,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 123456789 "), {
    errors: [],
    formatted: "123-45-6789",
    parsed: "123456789",
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(formatter.format("111223333"), {
    errors: [],
    formatted: "111-22-3333",
    parsed: "111223333",
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(formatter.format("11122333"), {
    errors: ["FormFormatters.ssnInvalid"],
    formatted: "11122333",
    parsed: "11122333",
    valid: false
  });
});
