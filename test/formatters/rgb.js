import formatter from "../../src/formatters/rgb";
import test from "ava";

test("accepts null", t => {
  t.deepEqual(formatter.format(null), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(formatter.format(""), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("string over 255", t => {
  t.deepEqual(formatter.format("256"), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: "256",
    parsed: "256",
    valid: false
  });
});

test("number over 255", t => {
  t.deepEqual(formatter.format(666666), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: 666666,
    parsed: 666666,
    valid: false
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 255 "), {
    errors: [],
    formatted: 255,
    parsed: 255,
    valid: true
  });
});

test("accepts 15", t => {
  t.deepEqual(formatter.format("15"), {
    errors: [],
    formatted: 15,
    parsed: 15,
    valid: true
  });
});

test("accepts 0", t => {
  t.deepEqual(formatter.format("0"), {
    errors: [],
    formatted: 0,
    parsed: 0,
    valid: true
  });
});

test("string below 0", t => {
  t.deepEqual(formatter.format("-1"), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: "-1",
    parsed: "-1",
    valid: false
  });
});

test("number below 0", t => {
  t.deepEqual(formatter.format(-1), {
    errors: ["FormFormatters.rgbInvalid"],
    formatted: -1,
    parsed: -1,
    valid: false
  });
});
