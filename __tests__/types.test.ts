import { isWordCountObject } from "../src/types";

describe("isWordCountObject()", () => {
  it("returns true for correct object type", () => {
    const input = { armadillo: 2 };

    expect(isWordCountObject(input)).toBe(true);
  });
  it("returns false for null or undefined", () => {
    const inputA = null;
    const inputB = undefined;

    expect(isWordCountObject(inputA)).toBe(false);
    expect(isWordCountObject(inputB)).toBe(false);
  });
  it("returns true for empty object", () => {
    const input = {};

    expect(isWordCountObject(input)).toBe(true);
  });
  it("returns false for incorrect object type", () => {
    const input = { armadillo: "2" };

    expect(isWordCountObject(input)).toBe(false);
  });
  it("returns false for non-object", () => {
    const input = [{ armadillo: 2 }];

    expect(isWordCountObject(input)).toBe(false);
  });
});
