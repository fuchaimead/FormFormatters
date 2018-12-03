import { PercentConverter } from "../../src";
import test from "ava";

test("handles null", t => {
  t.deepEqual(PercentConverter(null), null);
});

test("handles empty string", t => {
  t.deepEqual(PercentConverter(""), "");
});

test("converts number value", t => {
  t.deepEqual(PercentConverter(12.33), "12.33%");
});

test("converts string value", t => {
  t.deepEqual(PercentConverter("45"), "45%");
});

test("preserves %", t => {
  t.deepEqual(PercentConverter("25%"), "25%");
});