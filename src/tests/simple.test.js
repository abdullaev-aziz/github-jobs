const sum = (a, b) => a + b;

test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1+2 and doesn't return 3", () => {
  expect(sum(1, 2)).not.toBe(5);
});

test("2 + 2 is four", () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});
