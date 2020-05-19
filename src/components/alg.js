// const getNumFromStr = () => {
//   let result = "3+6/2+45-3";
//   console.log(`Result: ` + result.match(/\d+/g));
// };

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export const extractNums = input => {
  // console.log(`Extracted numbers: ` + input.match(/\d+/g));
  // input.match(/\d+/g));
  let extractedToArr = input.split("");
  console.log(extractedToArr);
  let replaceNums = extractedToArr.map(idx => {});
  // compare idx to every value in numbers
  // if they match, replace it with a random number from numbers
  // if !match, move on to next idx
};
