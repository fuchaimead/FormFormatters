import test from "ava";
import { StringFormatter } from "../../src";

test("converts number", t => {
  t.deepEqual(StringFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: [],
    formatted: "23",
    parsed: "23",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(StringFormatter({errors: [], valid: true, formatted: " hi ", parsed: " hi "}), {
    errors: [],
    formatted: "hi",
    parsed: "hi",
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(StringFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("accepts null", t => {
  t.deepEqual(StringFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});
