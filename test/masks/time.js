import mask from "../../src/masks/time";
import test from "ava";

test("handles nulls", t => {
  t.deepEqual(mask.mask(null), null);
});
