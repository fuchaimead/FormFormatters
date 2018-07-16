import test from "ava";
import formatter from "../../src/formatters/string";

test("converts number", t => {
  t.deepEqual(formatter.format(23), {
    errors: [],
    formatted: "23",
    parsed: "23",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" hi "), {
    errors: [],
    formatted: "hi",
    parsed: "hi",
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

test("accepts null", t => {
  t.deepEqual(formatter.format(null), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});
