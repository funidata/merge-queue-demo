import test from "node:test";
import assert from "node:assert";
import { a } from "./main.mjs";

// Hello
test("a", () => {
  assert.strictEqual(a, 1);
});
