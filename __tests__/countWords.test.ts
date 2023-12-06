import countWords from "../countWords";

describe("countWords()", () => {
  it("returns an empty object if passed an empty array", () => {
    const result = countWords([]);

    expect(result).toEqual({});
  });
  it("returns correct count for array containing one word", () => {
    const input = ["armadillo"];
    const expected = { armadillo: 1 };

    const result = countWords(input);

    expect(result).toEqual(expected);
  });
  it("returns correct count for array containing two of the same word", () => {
    const inputA = ["armadillo", "armadillo"];
    const expectedA = { armadillo: 2 };

    const resultA = countWords(inputA);

    expect(resultA).toEqual(expectedA);
  });
  it("returns correct count for an array of two different words", () => {
    const input = ["armadillo", "zebra"];
    const expected = { armadillo: 1, zebra: 1 };

    const result = countWords(input);

    expect(result).toEqual(expected);
  });
  it("counts all versions of a word in the array", () => {
    const input = [" armadillo", "Armadillo!", "zebra ", "armaDIllo", ".ZEBRA"];
    const expected = { armadillo: 3, zebra: 2 };

    const result = countWords(input);

    expect(result).toEqual(expected);
  });
  it("removes any empty strings or lone non-alphabet strings", () => {
    const input = ["", "armadillo", "?"];
    const expected = { armadillo: 1 };

    const result = countWords(input);

    expect(result).toEqual(expected);
  });
  it("ERROR: throws error if not passed argument", () => {
    expect(countWords).toThrow(Error("No input provided"));
  });
  it("ERROR: throws error if not passed string array as argument", () => {
    expect(() => countWords("armadillo" as any)).toThrow(
      Error("Incorrect input type"),
    );
  });
});
