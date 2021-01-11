test = (title, fn) => {
  try {
    fn();
    console.log(title, "test pass");
  } catch (e) {
    console.log(e);
    console.log(title, "test fail");
  }
};

expect = (ret) => {
  return {
    toBe(arg) {
      if (ret !== arg) {
        console.error(`expect not equal to fact, expect ${arg}, fact ${ret}`);
      }
    },
  };
};

test("test add num", () => {
  expect(add(1, 2)).toBe(3);
});

test("add num and string", () => {
  expect(add(1, "2")).toBe(3);
});

test("add string and string", () => {
  expect(add("a", "b")).toBe("ab");
});
