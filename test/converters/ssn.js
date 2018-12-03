import test from "ava";
import { SsnConverter } from "../../src";

test("accepts null", t => {
  t.deepEqual(SsnConverter(null), null);
});

test("accepts empty string", t => {
  t.deepEqual(SsnConverter(""), "");
});

test("converts and formats number", t => {
  t.deepEqual(SsnConverter(123456789), "123-45-6789");
});

test("formats unformatted strings", t => {
  t.deepEqual(SsnConverter("111223333"), "111-22-3333");
});

test("preserves formatted strings", t => {
  t.deepEqual(SsnConverter("111-22-3333"), "111-22-3333");
});
