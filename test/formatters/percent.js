import test from "ava";
import { PercentFormatter } from "../../src";

test("converts null", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: [],
    formatted: "23%",
    parsed: 23,
    valid: true
  });
});

test("has decimal", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: 23.23, parsed: 23.23}), {
    errors: [],
    formatted: "23.23%",
    parsed: 23.23,
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: " 1112223333 ", parsed: " 1112223333 "}), {
    errors: [],
    formatted: "1,112,223,333%",
    parsed: 1112223333,
    valid: true
  });
});

test("formats strings", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: "1112223333", parsed: "1112223333"}), {
    errors: [],
    formatted: "1,112,223,333%",
    parsed: 1112223333,
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: "asdf", parsed: "asdf"}), {
    errors: ["FormFormatters.numberInvalid"],
    formatted: "asdf",
    parsed: "asdf",
    valid: false
  });
});

test("decimal string", t => {
  t.deepEqual(PercentFormatter({errors: [], valid: true, formatted: "23.23%", parsed: "23.23%"}), {
    errors: [],
    formatted: "23.23%",
    parsed: 23.23,
    valid: true
  });
});
