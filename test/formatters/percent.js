import test from "ava";
import formatter from "../../src/formatters/percent";

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

test("converts number", t => {
  t.deepEqual(formatter.format(23), {
    errors: [],
    formatted: "23%",
    parsed: 23,
    valid: true
  });
});

test("has decimal", t => {
  t.deepEqual(formatter.format(23.23), {
    errors: [],
    formatted: "23.23%",
    parsed: 23.23,
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 1112223333 "), {
    errors: [],
    formatted: "1,112,223,333%",
    parsed: 1112223333,
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(formatter.format("1112223333"), {
    errors: [],
    formatted: "1,112,223,333%",
    parsed: 1112223333,
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(formatter.format("asdf"), {
    errors: ["FormFormatters.numberInvalid"],
    formatted: "asdf",
    parsed: "asdf",
    valid: false
  });
});

test("decimal string", t => {
  t.deepEqual(formatter.format("23.23%"), {
    errors: [],
    formatted: "23.23%",
    parsed: 23.23,
    valid: true
  });
});
