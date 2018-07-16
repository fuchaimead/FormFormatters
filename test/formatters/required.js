import formatter from "../../src/formatters/required";
import test from "ava";

test("null fails", t => {
  t.deepEqual(formatter.format(null), {
    errors: ["FormFormatters.required"],
    formatted: null,
    parsed: null,
    valid: false
  });
});

test("empty string fails", t => {
  t.deepEqual(formatter.format(""), {
    errors: ["FormFormatters.required"],
    formatted: "",
    parsed: "",
    valid: false
  });
});

test("handles number", t => {
  t.deepEqual(formatter.format(1112223333), {
    errors: [],
    formatted: 1112223333,
    parsed: 1112223333,
    valid: true
  });
});

test("handles zero", t => {
  t.deepEqual(formatter.format(0), {
    errors: [],
    formatted: 0,
    parsed: 0,
    valid: true
  });
});

test("handles string", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: " 1112223333 ",
    parsed: " 1112223333 ",
    valid: true
  });
});

test("handles letters", t => {
  t.deepEqual(formatter.format("111asdf222333.23"), {
    errors: [],
    formatted: "111asdf222333.23",
    parsed: "111asdf222333.23",
    valid: true
  });
});
