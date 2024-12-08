import wordBank from "./wordle-bank.txt";

export const boardDefault = [
  ["", "", "", "", "",""],
  ["", "", "", "", "",""],
  ["", "", "", "", "",""],
  ["", "", "", "", "",""],
  ["", "", "", "", "",""],
  ["", "", "", "", "",""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord="neeraj";
      wordSet = new Set(wordArr);
      console.log(todaysWord);
    });
  return { wordSet, todaysWord };
};
