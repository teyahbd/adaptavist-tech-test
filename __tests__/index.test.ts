import { jest } from "@jest/globals";
import generateWordCount from "../src";

const consoleLogSpy = jest.spyOn(console, "log");

describe("generateWordCount()", () => {
  beforeEach(jest.clearAllMocks);
  it("logs count for file containing single word", () => {
    const input = "__tests__/data/single-word.txt";
    const expected = "hello: 1";

    generateWordCount(input);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(expected);
  });

  it("logs multiple counts alphabetically for file containing multiple words", () => {
    const input = "__tests__/data/multi-line.txt";
    const expected = ["is: 2", "line: 2", "one: 1", "this: 2", "two: 1"];

    generateWordCount(input);

    expect(consoleLogSpy).toHaveBeenCalledTimes(5);

    for (let i = 0; i < 5; i++)
      expect(consoleLogSpy.mock.calls[i][0]).toBe(expected[i]);
  });
  it("ERROR: throws error if no filepath provided", () => {
    expect(generateWordCount).toThrow(Error("No filepath provided"));
  });
});
