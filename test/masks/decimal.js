import mask from "../../src/masks/decimal";
import test from "ava";

test("trims white space", t => {
  t.deepEqual(mask.mask(" 666666 "), "666666");
});

test("special characters", t => {
  t.deepEqual(mask.mask("1,000,000.23"), "1,000,000.23");
});

test("invalid", t => {
  t.deepEqual(mask.mask("#*&%!#ASDF"), "");
});
