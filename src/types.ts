export interface WordCountObject {
  [key: string]: number;
}

export function isWordCountObject(arg: any): arg is WordCountObject {
  return (
    typeof arg === "object" &&
    arg !== null &&
    Object.values(arg).every((value) => typeof value === "number")
  );
}
