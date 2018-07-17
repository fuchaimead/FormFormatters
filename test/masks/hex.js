import mask from "../../src/masks/hex";
import test from "ava";

test("handles nulls", t => {
  t.deepEqual(mask.mask(null), null);
});

test("trims white space", t => {
  t.deepEqual(mask.mask(" 666666 "), "666666");
});

test("accepts hash tag", t => {
  t.deepEqual(mask.mask("#666666"), "#666666");
});

test("invalid", t => {
  t.deepEqual(mask.mask("#00FFF"), "#00FFF");
});
