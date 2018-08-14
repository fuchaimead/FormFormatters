import { DateConverter } from "../../src";
import test from "ava";

test("accepts epoch", t => {
  t.deepEqual(DateConverter(1672531200), "Jan 1, 2023");
});

test("accepts string epoch", t => {
  t.deepEqual(DateConverter("1672531200"), "Jan 1, 2023");
});

test("accepts num", t => {
  t.deepEqual(DateConverter(23), "Jan 1, 1970");
});

test("accepts null", t => {
  t.deepEqual(DateConverter(null), null);
});
