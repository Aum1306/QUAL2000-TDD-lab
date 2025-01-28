const{
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
} = require("../lab-TDD-starter");
const {describe, test} = require("node:test");
const assert = require("node:assert");


describe("Lab-TDD tests", () => {
    describe("Add function tests", () => {
    test("Add function should return 8 when adding 5 and 3", () => {
        assert.strictEqual(add(3,5), 8);
    });
    test("Add function should return 0 when adding -5 and 5", () => {
        assert.strictEqual(add(-5, 5), 0);
    });
});

describe("Divide function tests",() => {
    test("Divided function should return 4 when dividing 32 over 8", () => {
        assert.strictEqual(divide(32, 8), 4);
    });
    test("Zero division should throw and error", () => {
        assert.throws(() => divide(10 , 0) , Error);
    });
});

describe("Subtract function tests", () => {
    test("Subtract function should return -4 when subtracting 9 from 5", () => {
      assert.strictEqual(subtract(5, 9), -4);
    });
    test("Subtract function should return 0 when subtracting 5 from 5", () => {
      assert.strictEqual(subtract(5, 5), 0);
    });
  });

  describe("Multiply function tests", () => {
    test("Multiply function should return 108 when multiplying 12 by 9", () => {
      assert.strictEqual(multiply(12, 9), 108);
    });
    test("Multiply function should return 0 when multiplying 0 by 5", () => {
      assert.strictEqual(multiply(0, 5), 0);
    });
  });

  describe("Modulas function tests", () => {
    test("Modulas function should return 1 when dividing 17 by 4", () => {
      assert.strictEqual(modulas(17, 4), 1);
    });
    test("Modulas function should return 0 when dividing 16 by 4", () => {
      assert.strictEqual(modulas(16, 4), 0);
    });
  });

  describe("Power function tests", () => {
    test("Power function should return 32 when raising 2 to the power of 5", () => {
      assert.strictEqual(power(2, 5), 32);
    });
    test("Power function should return 1 when raising 5 to the power of 0", () => {
      assert.strictEqual(power(5, 0), 1);
    });
  });

  describe("Floor function tests", () => {
    test("Floor function should return 15 when flooring 15.3", () => {
      assert.strictEqual(floor(15.3), 15);
    });
  });

  describe("Ceiling function tests", () => {
    test("Ceiling function should return 16 when ceiling 15.3", () => {
      assert.strictEqual(ceiling(15.3), 16);
    });
  });

  describe("Square Root function tests", () => {
    test("Square root function should return 5 when taking the square root of 25", () => {
      assert.strictEqual(squareRoot(25), 5);
    });
    test("Square root function should throw an error when given a negative number", () => {
      assert.throws(() => squareRoot(-9), Error);
    });
  });
});