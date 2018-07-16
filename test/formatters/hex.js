import formatter from "../../src/formatters/hex";
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

test("number", t => {
  t.deepEqual(formatter.format(666666), {
    errors: [],
    formatted: "#666666",
    parsed: "#666666",
    valid: true
  });
});

test("trims white space", t => {
  t.deepEqual(formatter.format(" 666666 "), {
    errors: [],
    formatted: "#666666",
    parsed: "#666666",
    valid: true
  });
});

test("accepts hash tag", t => {
  t.deepEqual(formatter.format("#666666"), {
    errors: [],
    formatted: "#666666",
    parsed: "#666666",
    valid: true
  });
});

test("invalid", t => {
  t.deepEqual(formatter.format("#00FFF"), {
    errors: ["FormFormatters.hexInvalid"],
    formatted: "#00FFF",
    parsed: "#00FFF",
    valid: false
  });
});
