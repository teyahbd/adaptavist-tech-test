import countWords from "./countWords";
import { formatObjectAsAlphabeticalArray, getFileAsArray } from "./utils";

export default function generateWordCount(filepath: string): void {
  if (!filepath) throw new Error("No filepath provided");

  const wordArray = getFileAsArray(filepath);

  const wordCount = countWords(wordArray);

  const sortedWordCountArray = formatObjectAsAlphabeticalArray(wordCount);

  sortedWordCountArray.forEach((word) => {
    const key = Object.keys(word)[0];
    console.log(`${key}: ${word[key]}`);
  });
}
