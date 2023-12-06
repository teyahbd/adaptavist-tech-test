import {
  WordCountObject,
  isWordCountObject,
  isWordCountObjectArray,
} from "../src/types";

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
  it("returns false for empty object", () => {
    const input = {};

    expect(isWordCountObject(input)).toBe(false);
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

describe("isWordCountObjectArray()", () => {
  it("returns true for correct array type containing one object", () => {
    const input = [{ armadillo: 2 }];

    expect(isWordCountObjectArray(input)).toBe(true);
  });
  it("returns true for correct array type containing more than one object", () => {
    const input = [{ armadillo: 2 }, { zebra: 1 }];

    expect(isWordCountObjectArray(input)).toBe(true);
  });
  it("returns true for empty array", () => {
    const input: WordCountObject[] = [];

    expect(isWordCountObjectArray(input)).toBe(true);
  });
  it("returns false for null or undefined", () => {
    const inputA = null;
    const inputB = undefined;

    expect(isWordCountObjectArray(inputA)).toBe(false);
    expect(isWordCountObjectArray(inputB)).toBe(false);
  });
  it("returns false for non-array", () => {
    const input = { armadillo: 2 };

    expect(isWordCountObjectArray(input)).toBe(false);
  });
  it("returns false for incorrect array type", () => {
    const input = [1, 2, 3];

    expect(isWordCountObjectArray(input)).toBe(false);
  });
  it("returns false for incorrect object types within array", () => {
    const input = [{ armadillo: 2 }, { zebra: "1" }];

    expect(isWordCountObjectArray(input)).toBe(false);
  });
});
