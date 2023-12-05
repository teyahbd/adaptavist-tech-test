export default function cleanWord(word: string): string {
  if (!word) throw new Error("No word provided");

  if (typeof word !== "string") throw new Error("Incorrect input type");

  return word.replace(/[^a-zA-Z]/g, "").toLowerCase();
}
