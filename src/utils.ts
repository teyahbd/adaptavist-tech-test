import { WordCountObject, isWordCountObjectArray } from "./types";

export function cleanWord(word: string): string {
  if (!word) throw new Error("No word provided");

  if (typeof word !== "string") throw new Error("Incorrect input type");

  return word.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

export function sortWordCountArrayAlphabetically(
  wordCountArray: WordCountObject[],
) {
  if (!isWordCountObjectArray(wordCountArray))
    throw new Error("Incorrect input type");
  const sortedArray = wordCountArray.map((obj) => ({ ...obj }));

  return sortedArray.sort((a, b) => {
    const keyA = Object.keys(a)[0];
    const keyB = Object.keys(b)[0];

    return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
  });
}
