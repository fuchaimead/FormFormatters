import test from "ava";
import { TimeFormatter } from "../../src";

test("accepts null", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("returns an error if required", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: [],
    formatted: "11:00 pm",
    parsed: "11:00 pm",
    valid: true
  });
});

test("trims whteste space", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: " 1112223333 ", parsed: " 1112223333 "}), {
    errors: [],
    formatted: "11:12 am",
    parsed: "11:12 am",
    valid: true
  });
});

test("formats times", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: "5", parsed: "5"}), {
    errors: [],
    formatted: "5:00 am",
    parsed: "5:00 am",
    valid: true
  });
});

test("formats hh:mm", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: "23:00", parsed: "23:00"}), {
    errors: [],
    formatted: "11:00 pm",
    parsed: "11:00 pm",
    valid: true
  });
});

test("formats hh:mm a", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: "7:00 pm", parsed: "7:00 pm"}), {
    errors: [],
    formatted: "7:00 pm",
    parsed: "7:00 pm",
    valid: true
  });
});

test("does not handles errors", t => {
  t.deepEqual(TimeFormatter({errors: [], valid: true, formatted: "abc", parsed: "abc"}), {
    errors: ["FormFormatters.timeInvalid"],
    formatted: "abc",
    parsed: "abc",
    valid: false
  });
});
