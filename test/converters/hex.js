import { HexConverter } from "../../src";
import test from "ava";

test("accepts null", t => {
  t.deepEqual(HexConverter(null), null);
});

test("does not return an error if empty string", t => {
  t.deepEqual(HexConverter(""), "");
});

test("converts and formats number", t => {
  t.deepEqual(HexConverter(666666), "#666666");
});

test("preserves hash tag", t => {
  t.deepEqual(HexConverter("#666666"), "#666666");
});
