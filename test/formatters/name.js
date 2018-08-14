import { NameFormatter } from "../../src";
import test from "ava";

test("converts null", t => {
  t.deepEqual(NameFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(NameFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("accepts valid name", t => {
  t.deepEqual(NameFormatter({errors: [], valid: true, formatted: "Bob Smith", parsed: "Bob Smith"}), {
    errors: [],
    formatted: "Bob Smith",
    parsed: "Bob Smith",
    valid: true
  });
});

test("trims whitespace", t => {
  t.deepEqual(NameFormatter({errors: [], valid: true, formatted: " Bob Smith ", parsed: " Bob Smith "}), {
    errors: [],
    formatted: "Bob Smith",
    parsed: "Bob Smith",
    valid: true
  });
});

test("catches lowercase names", t => {
  t.deepEqual(NameFormatter({errors: [], valid: true, formatted: "merle jaunita van oster", parsed: "merle juanita van oster"}), {
    errors: [],
    formatted: "Merle Juanita Van Oster",
    parsed: "Merle Juanita Van Oster",
    valid: true
  });
});
