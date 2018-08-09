import test from "ava";
import formatter from "../../src/formatters/array";

test("handles an array", t => {
  t.deepEqual(formatter.format(["foo", "bar"]), {
    errors: [],
    formatted: ["foo", "bar"],
    parsed: ["foo", "bar"],
    valid: true
  });
});

test("handles an empty array", t => {
  t.deepEqual(formatter.format(["foo", "bar"]), {
    errors: [],
    formatted: ["foo", "bar"],
    parsed: ["foo", "bar"],
    valid: true
  });
});

test("does not return an error if blank", t => {
  t.deepEqual(formatter.format(""), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("does not return an error if null", t => {
  t.deepEqual(formatter.format(null), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if object", t => {
  t.deepEqual(formatter.format({foo: "bar"}), {
    errors: [],
    formatted: {foo: "bar"},
    parsed: {foo: "bar"},
    valid: true
  });
});
