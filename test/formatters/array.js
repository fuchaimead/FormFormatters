import { ArrayFormatter } from "../../src/";
import test from "ava";

test("handles an array", t => {
  t.deepEqual(ArrayFormatter({valid: true, errors: [], formatted: ["foo", "bar"], parsed: ["foo", "bar"]}), {
    errors: [],
    formatted: ["foo", "bar"],
    parsed: ["foo", "bar"],
    valid: true
  });
});

test("handles an empty array", t => {
  t.deepEqual(ArrayFormatter({valid: true, errors: [], formatted: [], parsed: []}), {
    errors: [],
    formatted: [],
    parsed: [],
    valid: true
  });
});

test("does not return an error if blank", t => {
  t.deepEqual(ArrayFormatter({valid: true, errors: [], formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("does not return an error if null", t => {
  t.deepEqual(ArrayFormatter({valid: true, errors: [], formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if object", t => {
  t.deepEqual(ArrayFormatter({valid: true, errors: [], formatted: {foo: "bar"}, parsed: {foo: "bar"}}), {
    errors: [],
    formatted: {foo: "bar"},
    parsed: {foo: "bar"},
    valid: true
  });
});
