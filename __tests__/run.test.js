import { run } from "../src/js/run.js";

test('run with "double" operation', () => {
  expect(run("double", 2)).toBe(4);
});

test('run with "triple" operation', () => {
  expect(run("triple", 2)).toBe(6);
});
