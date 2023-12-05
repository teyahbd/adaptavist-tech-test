import cleanWord from "../src/utils";

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
