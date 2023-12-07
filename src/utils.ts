import * as fs from "fs";
import { WordCountObject, isWordCountObject } from "./types";

export function getFileAsArray(filepath: string): string[] {
  const fileString = fs.readFileSync(filepath, "utf8");

  const removedNewLines = fileString.split("\n");

  return removedNewLines.reduce(
    (accumulator: string[], currentValue: string) => {
      const words = currentValue.split(" ").filter((word) => word !== "");
      return [...accumulator, ...words];
    },
    [],
  );
}

export function cleanWord(word: string): string {
  return word.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

export function formatObjectAsAlphabeticalArray(
  object: WordCountObject,
): WordCountObject[] {
  if (!isWordCountObject(object)) throw new Error("Incorrect input type");

  const wordCountArray = Object.keys(object).map((key) => ({
    [key]: object[key],
  }));

  return wordCountArray.sort((a, b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];

    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });
}
