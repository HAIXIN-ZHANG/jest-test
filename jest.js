add = (a, b) => {
  if (Number(a) === a && Number(b) === b) {
    return Number(a) + Number(b);
  } else if (typeof a === "object" && typeof b === "object") {
    return Object.assign({}, a, b);
  }
  return a + b;
};
