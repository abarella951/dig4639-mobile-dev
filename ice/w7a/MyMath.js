function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
  }
  return result;
}

export { Sum };