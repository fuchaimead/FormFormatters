import { WholeNumberFormatter } from "../../src";
import test from "ava";

test("converts null", t => {
  t.deepEqual(WholeNumberFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("returns an empty string", t => {
  t.deepEqual(WholeNumberFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(WholeNumberFormatter({errors: [], valid: true, formatted: " 1112223333 ", parsed: " 1112223333 "}), {
    errors: [],
    formatted: "1112223333",
    parsed: 1112223333,
    valid: true
  });
});

test("handles letters", t => {
  t.deepEqual(WholeNumberFormatter({errors: [], valid: true, formatted: "111asdf222333.23", parsed: "111asdf222333.23"}), {
    errors: [],
    formatted: "111222333",
    parsed: 111222333,
    valid: true
  });
});

test("rounds up", t => {
  t.deepEqual(WholeNumberFormatter({errors: [], valid: true, formatted: "111222333.99", parsed: "111222333.99"}), {
    errors: [],
    formatted: "111222334",
    parsed: 111222334,
    valid: true
  });
});

test("handles errors", t => {
  t.deepEqual(WholeNumberFormatter({errors: [], valid: true, formatted: "111.222333.23", parsed: "111.222333.23"}), {
    errors: ["FormFormatters.numberInvalid"],
    formatted: "111.222333.23",
    parsed: "111.222333.23",
    valid: false
  });
});
