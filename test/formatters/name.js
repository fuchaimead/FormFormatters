import formatter from "../../src/formatters/name";
import test from "ava";

test("converts null", t => {
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

test("accepts valid name", t => {
  t.deepEqual(formatter.format("Bob Smith"), {
    errors: [],
    formatted: "Bob Smith",
    parsed: "Bob Smith",
    valid: true
  });
});

test("trims whitespace", t => {
  t.deepEqual(formatter.format(" Bob Smith "), {
    errors: [],
    formatted: "Bob Smith",
    parsed: "Bob Smith",
    valid: true
  });
});

test("catches lowercase names", t => {
  t.deepEqual(formatter.format("merle juanita van oster"), {
    errors: [],
    formatted: "Merle Juanita Van Oster",
    parsed: "Merle Juanita Van Oster",
    valid: true
  });
});
