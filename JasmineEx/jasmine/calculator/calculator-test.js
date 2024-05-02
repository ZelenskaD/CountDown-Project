it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 10000,
    years: 30,
    rate: 1.5,
  };
  expect(calculateMonthlyPayment(values)).toEqual("34.51");
  // ...
});

it("should not be equal 0 ", function () {
  const values = {
    amount: 10000,
    years: 30,
    rate: 1.5,
  };
  expect(calculateMonthlyPayment(values)).not.toEqual("0");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 300000,
    years: 11,
    rate: 8.9,
  };
  expect(calculateMonthlyPayment(values)).toMatch("3571.6");
});

/// etc
