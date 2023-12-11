import { run } from "./run.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const operationDouble = document.querySelector("#operation-double");
const operationTriple = document.querySelector("#operation-triple");

operationDouble.addEventListener("click", () => {
  output.value = run("double", input.value);
});
operationTriple.addEventListener("click", () => {
  output.value = run("triple", input.value);
});
