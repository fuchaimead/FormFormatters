import mask from "../../src/masks/currency";
import test from "ava";

test("Removes letters", t => {
  t.deepEqual(mask.mask("123.12Test"), "123.12");
});

test("String with '$' should remove it", t => {
  t.deepEqual(mask.mask("$123.12"), "123.12");
});

test("Large number", t => {
  t.deepEqual(mask.mask("123,123,123.12"), "123,123,123.12");
});
