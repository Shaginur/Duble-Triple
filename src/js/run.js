function double(number) {
  return number * 2;
}

function triple(number) {
  return number * 3;
}

export function run(operation, number) {
  if (operation === "double") {
    return double(number);
  }
  if (operation === "triple") {
    return triple(number);
  }
  return "0";
}
