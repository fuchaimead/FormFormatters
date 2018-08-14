import { EmailFormatter } from "../../src";
import test from "ava";

test("accepts null", t => {
  t.deepEqual(EmailFormatter({errors: [], valid: true, formatted: null, parsed: null}), {
    errors: [],
    formatted: null,
    parsed: null,
    valid: true
  });
});

test("does not return an error if empty string", t => {
  t.deepEqual(EmailFormatter({errors: [], valid: true, formatted: "", parsed: ""}), {
    errors: [],
    formatted: "",
    parsed: "",
    valid: true
  });
});

test("converts number", t => {
  t.deepEqual(EmailFormatter({errors: [], valid: true, formatted: 23, parsed: 23}), {
    errors: ["FormFormatters.emailInvalid"],
    formatted: "23",
    parsed: "23",
    valid: false
  });
});

test("accepts valid emails", t => {
  t.deepEqual(EmailFormatter({errors: [], valid: true, formatted: "bob@example.com", parsed: "bob@example.com"}), {
    errors: [],
    formatted: "bob@example.com",
    parsed: "bob@example.com",
    valid: true
  });
});

test("trims whitespace", t => {
  t.deepEqual(EmailFormatter({errors: [], valid: true, formatted: " bob@example.com ", parsed: " bob@example.com "}), {
    errors: [],
    formatted: "bob@example.com",
    parsed: "bob@example.com",
    valid: true
  });
});

test("catches invalid emails", t => {
  t.deepEqual(EmailFormatter({errors: [], valid: true, formatted: "bob@example. com ", parsed: "bob@example. com"}), {
    errors: ["FormFormatters.emailInvalid"],
    formatted: "bob@example. com",
    parsed: "bob@example. com",
    valid: false
  });
});
