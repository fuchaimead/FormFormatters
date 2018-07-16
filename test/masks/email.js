import mask from "../../src/masks/email";
import test from "ava";

test("allows white space", t => {
  t.deepEqual(mask.mask(" test@test.com "), " test@test.com ");
});

test("lower case", t => {
  t.deepEqual(mask.mask("TEST@test.COM"), "test@test.com");
});

test("invalid", t => {
  t.deepEqual(mask.mask("test.com.com@test"), "test.com.com@test");
});