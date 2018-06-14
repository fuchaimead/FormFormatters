import mask from "../../src/masks/hex";
import test from "ava";

test("trims white space", t => {
  t.deepEqual(mask.mask(" 666666 "), "666666");
});

test("accepts hash tag", t => {
  t.deepEqual(mask.mask("#666666"), "#666666");
});
