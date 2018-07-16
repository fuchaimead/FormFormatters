import formatter from "../../src/formatters/number";
import test from "ava";

test("converts null", t => {
  t.deepEqual(formatter.format(null), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("returns an empty string", t => {
  t.deepEqual(formatter.format(""), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: "1112223333",
    parsed: 1112223333,
    valid: true
  });
});

test("handles letters", t => {
  t.deepEqual(formatter.format("111asdf222333.23"), {
    errors: [],
    formatted: "111222333.23",
    parsed: 111222333.23,
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(formatter.format("111.222333.23"), {
    errors: ["FormFormatters.numberInvalid"],
    formatted: "111.222333.23",
    parsed: "111.222333.23",
    valid: false
  });
});
