import test from "ava";
import { CreditCardConverter } from "../../src";

test("handles null", t => {
  t.deepEqual(CreditCardConverter(null), null);
});

test("does not return an error if blank", t => {
  t.deepEqual(CreditCardConverter(""), "");
});

test("converts and formats number", t => {
  t.deepEqual(CreditCardConverter(4583944000348272), "4583 9440 0034 8272");
});

test("formats strings without spaces", t => {
  t.deepEqual(CreditCardConverter("1111222233334444"), "1111 2222 3333 4444");
});

test("preserves formatted strings with spaces", t => {
  t.deepEqual(CreditCardConverter("1111 2222 3333 4444"), "1111 2222 3333 4444");
});

test("converts and formats AMEX number", t => {
  t.deepEqual(CreditCardConverter(341111111111111), "3411 111111 11111");
});

test("preserves formatted AMEX card string", t => {
  t.deepEqual(CreditCardConverter("3711 111111 11111"), "3711 111111 11111");
});
