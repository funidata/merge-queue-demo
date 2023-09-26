import test from "node:test";
import assert from "node:assert";
import { a } from "./main.mjs";

test("a", () => {
  assert.strictEqual(a, 1);
});
