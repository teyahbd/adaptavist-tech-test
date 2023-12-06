import { WordCountObject } from "../types";
import {
  cleanWord,
  formatObjectAsArray,
  getFileAsArray,
  sortArrayAlphabetically,
} from "../utils";

describe("getFileAsArray()", () => {
  it("returns single word array for file containing single word", () => {
    const input = "__tests__/data/single-word.txt";
    const expected = ["Hello!"];

    const result = getFileAsArray(input);

    expect(result).toHaveLength(1);
    expect(result).toEqual(expected);
  });
  it("returns multi word array for file containing a sentence", () => {
    const input = "__tests__/data/sentence.txt";
    const expected = ["Hello!", "This", "is", "a", "lovely", "sentence."];

    const result = getFileAsArray(input);

    expect(result).toHaveLength(6);
    expect(result).toEqual(expected);
  });
  it("returns correct array for file containing an unusually formatted and spaced sentence", () => {
    const input = "__tests__/data/unusual-sentence.txt";
    const expected = ["Hello!", "ThiS", "is", "an", ".unUsuaL", "sentence!!"];

    const result = getFileAsArray(input);

    expect(result).toHaveLength(6);
    expect(result).toEqual(expected);
  });
  it("returns correct array for file containing multiple lines", () => {
    const input = "__tests__/data/multi-line.txt";
    const expected = [
      "This",
      "is",
      "line",
      "one!",
      "This",
      "is",
      "line",
      "two!",
    ];

    const result = getFileAsArray(input);

    expect(result).toHaveLength(8);
    expect(result).toEqual(expected);
  });
  it("returns correct array for file containing multiple unusually spaced lines", () => {
    const input = "__tests__/data/unusual-multi-line.txt";
    const expected = ["hello", "Hello", "hELLo", "!"];

    const result = getFileAsArray(input);

    expect(result).toHaveLength(4);
    expect(result).toEqual(expected);
  });
  it("ERROR: throws error if not passed a filepath", () => {
    expect(getFileAsArray).toThrow(Error("No filepath provided"));
  });
  it("ERROR: throws error if passed an invalid filepath", () => {
    expect(() => getFileAsArray("/oops.txt")).toThrow();
  });
});
describe("cleanWord()", () => {
  it("returns a correctly formatted word", () => {
    const input = "hello";
    const expected = "hello";

    const result = cleanWord(input);

    expect(result).toBe(expected);
  });
  it("returns a lowercase word when passed a word with uppercase characters", () => {
    const inputA = "Hello";
    const expectedA = "hello";

    const inputB = "hELLo";
    const expectedB = "hello";

    const resultA = cleanWord(inputA);
    const resultB = cleanWord(inputB);

    expect(resultA).toBe(expectedA);
    expect(resultB).toBe(expectedB);
  });

  it("returns word with special characters removed", () => {
    const inputA = "hello!";
    const expectedA = "hello";

    const inputB = ".goodbye";
    const expectedB = "goodbye";

    const resultA = cleanWord(inputA);
    const resultB = cleanWord(inputB);

    expect(resultA).toBe(expectedA);
    expect(resultB).toBe(expectedB);
  });

  it("returns word with whitespace removed", () => {
    const inputA = "hello ";
    const expectedA = "hello";

    const inputB = " goodbye ";
    const expectedB = "goodbye";

    const resultA = cleanWord(inputA);
    const resultB = cleanWord(inputB);

    expect(resultA).toBe(expectedA);
    expect(resultB).toBe(expectedB);
  });

  it("corrects capitalisation, special characters and whitespace and returns correctly formatted word", () => {
    const input = " hELLo! ";
    const expected = "hello";

    const result = cleanWord(input);

    expect(result).toBe(expected);
  });

  it("ERROR: throws error if not passed a word", () => {
    expect(cleanWord).toThrow(Error("No word provided"));
  });
  it("ERROR: throws error if not passed a string", () => {
    expect(() => cleanWord(43110 as any)).toThrow(
      Error("Incorrect input type"),
    );
  });
});

describe("sortArrayAlphabetically()", () => {
  it("returns correctly ordered array", () => {
    const input: WordCountObject[] = [{ armadillo: 1 }, { zebra: 2 }];

    const expected: WordCountObject[] = [{ armadillo: 1 }, { zebra: 2 }];

    const result = sortArrayAlphabetically(input);

    expect(result).toEqual(expected);
  });
  it("sorts and returns array of two objects not in alphabetical order", () => {
    const input: WordCountObject[] = [{ zebra: 1 }, { armadillo: 0 }];

    const expected: WordCountObject[] = [{ armadillo: 0 }, { zebra: 1 }];

    const result = sortArrayAlphabetically(input);

    expect(result).toEqual(expected);
  });
  it("sorts and returns array of more than two objects not in alphabetical order", () => {
    const input: WordCountObject[] = [
      { zebra: 1 },
      { armadillo: 0 },
      { goose: 5 },
    ];

    const expected: WordCountObject[] = [
      { armadillo: 0 },
      { goose: 5 },
      { zebra: 1 },
    ];

    const result = sortArrayAlphabetically(input);

    expect(result).toEqual(expected);
  });
  it("ERROR: throws error if passed argument of incorrect type", () => {
    const inputA = undefined;
    const inputB = [{ armadillo: "1" }];
    const inputC = { armadillo: 1 };

    expect(() => sortArrayAlphabetically(inputA as any)).toThrow(
      Error("Incorrect input type"),
    );
    expect(() => sortArrayAlphabetically(inputB as any)).toThrow(
      Error("Incorrect input type"),
    );
    expect(() => sortArrayAlphabetically(inputC as any)).toThrow(
      Error("Incorrect input type"),
    );
  });
});

describe("formatObjectAsArray()", () => {
  it("returns correctly formatted object as array", () => {
    const input = { armadillo: 1 };
    const expected = [{ armadillo: 1 }];

    const result = formatObjectAsArray(input);

    expect(result).toEqual(expected);
  });
  it("returns multiple correctly formatted objects as array", () => {
    const input = { armadillo: 1, zebra: 5 };
    const expected = [{ armadillo: 1 }, { zebra: 5 }];

    const result = formatObjectAsArray(input);

    expect(result).toEqual(expected);
  });
  it("ERROR: throws error if not passed WordCountObject", () => {
    const inputA = { armadillo: "1" };
    const inputB = "armadillo";
    const inputC = undefined;
    expect(() => formatObjectAsArray(inputA as any)).toThrow(
      Error("Incorrect input type"),
    );
    expect(() => formatObjectAsArray(inputB as any)).toThrow(
      Error("Incorrect input type"),
    );
    expect(() => formatObjectAsArray(inputC as any)).toThrow(
      Error("Incorrect input type"),
    );
  });
});
