import countWords from "./countWords";
import {
  formatObjectAsArray,
  getFileAsArray,
  sortArrayAlphabetically,
} from "./utils";

export default function generateWordCount(filepath: string): void {
  if (!filepath) throw new Error("No filepath provided");

  const wordArray = getFileAsArray(filepath);

  const wordCount = countWords(wordArray);

  const wordCountArray = formatObjectAsArray(wordCount);

  const sortedWordCountArray = sortArrayAlphabetically(wordCountArray);

  sortedWordCountArray.forEach((word) => {
    const key = Object.keys(word)[0];
    console.log(`${key}: ${word[key]}`);
  });
}
