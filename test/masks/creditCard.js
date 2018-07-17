import mask from "../../src/masks/creditCard";
import test from "ava";

test("handles nulls", t => {
  t.deepEqual(mask.mask(null), null);
});

test("trims white space", t => {
  t.deepEqual(mask.mask(" 1234 5678 9012 3456 "), " 1234 5678 9012 3456 ");
});

test("special characters", t => {
  t.deepEqual(mask.mask("1234-5678-9012-3456"), "1234-5678-9012-3456");
});

test("strip", t => {
  t.deepEqual(mask.mask("1234_a_5678_b_9012_c_3456"), "1234567890123456");
});

test("invalid", t => {
  t.deepEqual(mask.mask("#*&%!#ASDF"), "");
});
