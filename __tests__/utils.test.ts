import { WordCountObject } from "../src/types";
import { cleanWord, sortWordCountArrayAlphabetically } from "../src/utils";

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

describe("sortWordCountArrayAlphabetically()", () => {
  it("returns correctly ordered array", () => {
    const input: WordCountObject[] = [{ armadillo: 1 }, { zebra: 2 }];

    const expected: WordCountObject[] = [{ armadillo: 1 }, { zebra: 2 }];

    const result = sortWordCountArrayAlphabetically(input);

    expect(result).toEqual(expected);
  });
  it("sorts and returns array of two objects not in alphabetical order", () => {
    const input: WordCountObject[] = [{ zebra: 1 }, { armadillo: 0 }];

    const expected: WordCountObject[] = [{ armadillo: 0 }, { zebra: 1 }];

    const result = sortWordCountArrayAlphabetically(input);

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

    const result = sortWordCountArrayAlphabetically(input);

    expect(result).toEqual(expected);
  });
  it("ERROR: throws error if passed argument of incorrect type", () => {
    const inputA = undefined;
    const inputB = [{ armadillo: "1" }];
    const inputC = { armadillo: 1 };

    expect(() => sortWordCountArrayAlphabetically(inputA as any)).toThrow(
      Error("Incorrect input type"),
    );
    expect(() => sortWordCountArrayAlphabetically(inputB as any)).toThrow(
      Error("Incorrect input type"),
    );
    expect(() => sortWordCountArrayAlphabetically(inputC as any)).toThrow(
      Error("Incorrect input type"),
    );
  });
});
