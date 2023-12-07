import { WordCountObject } from "./types";
import { cleanWord } from "./utils";

export default function countWords(words: string[]): WordCountObject {
  if (!words) throw new Error("No input provided");

  if (!Array.isArray(words)) throw new Error("Incorrect input type");

  const wordCountObject: WordCountObject = {};

  return words.reduce((accumulator, currentValue: string) => {
    const processedWord = cleanWord(currentValue);
    if (processedWord === "") return accumulator;

    if (Object.keys(accumulator).includes(processedWord)) {
      accumulator[processedWord] += 1;
    } else {
      accumulator[processedWord] = 1;
    }

    return accumulator;
  }, wordCountObject);
}
