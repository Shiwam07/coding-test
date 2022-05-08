const validation = require("./Validation");

const inputData = {
  "First Name": "John",
  "Last Name": "Smith",
  Phone: 123456789,
  Postcode: "2000",
};

describe("Check validation file functions", () => {
  test("Check if provided value is number", () => {
    expect(validation.isNumber(inputData["Phone"])).toBe(true);
  });
  test("Check if provided post code is valid", () => {
    expect(validation.isValidPostCode(inputData["Postcode"])).toBe(true);
  });
});
