import { CurrencyConverter } from "../../src";
import test from "ava";

test("handles null", t => {
  t.deepEqual(CurrencyConverter(null), null);
});

test("returns a empty string", t => {
  t.deepEqual(CurrencyConverter(""), "");
});

test("converts unformatted string", t => {
  t.deepEqual(CurrencyConverter("1112223333"), "1,112,223,333.00");
});

test("preserves formatted string", t => {
  t.deepEqual(CurrencyConverter("1,112,223,333.00"), "1,112,223,333.00");
});

test("converts and formats numbers", t => {
  t.deepEqual(CurrencyConverter(1112223333), "1,112,223,333.00");
});

test("converts and formats number less than 1", t => {
  t.deepEqual(CurrencyConverter(.25), "0.25");
});

test("formats cents", t => {
  t.deepEqual(CurrencyConverter("$5.14"), "5.14");
});

test("formats zero cents", t => {
  t.deepEqual(CurrencyConverter("5"), "5.00");
});
