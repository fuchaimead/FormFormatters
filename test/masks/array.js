import test from "ava";
import mask from "../../src/masks/array";

test("handles an array", t => {
  t.deepEqual(mask.mask(["foo", "bar"]), ["foo", "bar"])
});

test("handles an empty array", t => {
  t.deepEqual(mask.mask(["foo", "bar"]), ["foo", "bar"])
});

test("does not return an error if blank", t => {
  t.deepEqual(mask.mask(""), "")
});

test("does not return an error if null", t => {
  t.deepEqual(mask.mask(null), null)
});

test("does not return an error if object", t => {
  t.deepEqual(mask.mask({foo: "bar"}), {foo: "bar"})
});
