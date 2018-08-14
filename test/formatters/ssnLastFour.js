import { SsnLastFourFormatter } from "../../src";
import test from "ava";

test("accepts null", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: ["FormFormatters.last4Invalid"],
    formatted: 23,
    parsed: 23,
    valid: false
  });
});

test("valid", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: "1234", parsed: "1234"}), {
    errors: [],
    formatted: "1234",
    parsed: "1234",
    valid: true
  });
});

test("valid number", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: 1234, parsed: 1234}), {
    errors: [],
    formatted: "1234",
    parsed: "1234",
    valid: true
  });
});

test("trims whitespace", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: " 1234 ", parsed: " 1234 "}), {
    errors: [],
    formatted: "1234",
    parsed: "1234",
    valid: true
  });
});

test("catches too short", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: "123 ", parsed: "123 "}), {
    errors: ["FormFormatters.last4Invalid"],
    formatted: "123 ",
    parsed: "123 ",
    valid: false
  });
});

test("catches too long", t => {
  t.deepEqual(SsnLastFourFormatter({errors: [], valid: true, formatted: "12345", parsed: "12345"}), {
    errors: ["FormFormatters.last4Invalid"],
    formatted: "12345",
    parsed: "12345",
    valid: false
  });
});