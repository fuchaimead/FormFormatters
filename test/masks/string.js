import mask from "../../src/masks/string";
import test from "ava";

test("handles nulls", t => {
  t.deepEqual(mask.mask(null), null);
});
