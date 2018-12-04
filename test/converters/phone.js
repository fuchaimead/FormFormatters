import test from "ava";
import { PhoneConverter } from "../../src";

test("handles null", t => {
  t.deepEqual(PhoneConverter(null), null);
});

test("handles empty string", t => {
  t.deepEqual(PhoneConverter(""), "");
});

test("converts and formats number", t => {
  t.deepEqual(PhoneConverter(1112223333), "(111) 222-3333");
});

test("formats strings", t => {
  t.deepEqual(PhoneConverter("1112223333"), "(111) 222-3333");
});
