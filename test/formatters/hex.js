import formatter from "../../src/formatters/hex";
import test from "ava";

test("converts null", t => {
  t.deepEqual(formatter.format(null, {required: true}), {
    errors: ["FormFormatters.required"],
    formatted: "",
    parsed: "",
    valid: false
  });
});

test("returns an error if required", t => {
  t.deepEqual(formatter.format("", {required: true}), {
    errors: ["FormFormatters.required"],
    formatted: "",
    parsed: "",
    valid: false
  });
});

test("does not return an error if not required", t => {
  t.deepEqual(formatter.format(null), {
    errors: [],
    formatted: "",
    parsed: "",
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
