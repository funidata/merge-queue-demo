import test from "node:test";
import assert from "node:assert";
import { a } from "./main.mjs";

// hello
test("a", () => {
  assert.strictEqual(a, 1);
});
