import mask from "../../src/masks/percent";
import test from "ava";

test("handles nulls", t => {
  t.deepEqual(mask.mask(null), null);
});

test("Removes letters", t => {
  t.deepEqual(mask.mask("123.12Test"), "123.12");
});

test("Accepts %", t => {
  t.deepEqual(mask.mask("123.12%"), "123.12%");
});
