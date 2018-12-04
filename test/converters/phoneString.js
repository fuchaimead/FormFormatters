import test from "ava";
import { PhoneStringConverter } from "../../src";

test("handles null", t => {
  t.deepEqual(PhoneStringConverter(null), null);
});

test("handles empty string", t => {
  t.deepEqual(PhoneStringConverter(""), "");
});

test("converts and formats number", t => {
  t.deepEqual(PhoneStringConverter(1112223333), "(111) 222-3333");
});

test("formats dash formatted strings", t => {
  t.deepEqual(PhoneStringConverter("111-222-3333"), "(111) 222-3333");
});

test("formats space formatted strings", t => {
  t.deepEqual(PhoneStringConverter("111 222-3333"), "(111) 222-3333");
});

test("formats dot formatted strings", t => {
  t.deepEqual(PhoneStringConverter("111.222.3333"), "(111) 222-3333");
});

test("formats unformatted strings", t => {
  t.deepEqual(PhoneStringConverter("1112223333"), "(111) 222-3333");
});
