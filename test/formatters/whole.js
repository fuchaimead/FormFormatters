import formatter from "../../src/formatters/whole";
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
    formatted: "111222333",
    parsed: 111222333,
    valid: true
  });
});

test("rounds up", t => {
  t.deepEqual(formatter.format("111222333.99"), {
    errors: [],
    formatted: "111222334",
    parsed: 111222334,
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
