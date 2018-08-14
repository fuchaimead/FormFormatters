import { RgbFormatter } from "../../src";
import test from "ava";

test("accepts null", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("string over 255", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: "256", parsed: "256"}), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: "256",
    parsed: "256",
    valid: false
  });
});

test("number over 255", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: 666666, parsed: 666666}), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: 666666,
    parsed: 666666,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: " 255 ", parsed: " 255 "}), {
    errors: [],
    formatted: 255,
    parsed: 255,
    valid: true
  });
});

test("accepts 15", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: "15", parsed: "15"}), {
    errors: [],
    formatted: 15,
    parsed: 15,
    valid: true
  });
});

test("accepts 0", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: "0", parsed: "0"}), {
    errors: [],
    formatted: 0,
    parsed: 0,
    valid: true
  });
});

test("string below 0", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: "-1", parsed: "-1"}), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: "-1",
    parsed: "-1",
    valid: false
  });
});

test("number below 0", t => {
  t.deepEqual(RgbFormatter({errors: [], valid: true, formatted: -1, parsed: -1}), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: -1,
    parsed: -1,
    valid: false
  });
});
