// const getNumFromStr = () => {
//   let result = "3+6/2+45-3";
//   console.log(`Result: ` + result.match(/\d+/g));
// };

// See board for info

// random number()
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

let newArr = [];
let extractedToArr;
let replaceNums;
let newNumber;

export const extractNums = input => {
  extractedToArr = input.split(""); // returns ["4", "+", "5", "/", "2"]
  replaceNums = extractedToArr.map(currentMap => {
    if (numbers.includes(currentMap)) {
      // currentMap = randomNumber; // replaces currentMap with number, if a number
      newNumber = randomNumber;
      return newArr.push(newNumber);
    }
    return newArr.push(currentMap);
  });

  console.log(`replaceNums = `, replaceNums);
  console.log(`newArr = `, newArr);

  // compare currentMap to every value in numbers
  // if they match, replace it with a random number from numbers
  // if !match, move on to next currentMap
  // return new array (same operators different numbers)
};

// ???
// math.evaluate()
// ? store in question: answer pairs obj
// so eventually we have:
// let students = {
//   student1: {
//     question1: answer,
//     question2: answer,
//     question3: answer,
//     question4: answer,
//     question5: answer
//   },
//   student2: {
//     question1: answer,
//     question2: answer,
//     question3: answer,
//     question4: answer,
//     question5: answer
//   },
//   student3: {
//     question1: answer,
//     question2: answer,
//     question3: answer,
//     question4: answer,
//     question5: answer
//   }
// };
