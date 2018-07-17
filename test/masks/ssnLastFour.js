import mask from "../../src/masks/ssnLastFour";
import test from "ava";

test("handles nulls", t => {
  t.deepEqual(mask.mask(null), null);
});

test("Removes letters", t => {
  t.deepEqual(mask.mask("123.12Test"), "12312");
});

test("valid", t => {
  t.deepEqual(mask.mask("1234"), "1234");
});
