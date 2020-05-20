// const getNumFromStr = () => {
//   let result = "3+6/2+45-3";
//   console.log(`Result: ` + result.match(/\d+/g));
// };

// See board for info

// random number()
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const randomNumber = () => numbers[Math.floor(Math.random() * numbers.length)];

let extractedToArr;
let newNumber;

export const replaceNums = input => {
  let newArr = [];
  extractedToArr = input.split("");
  extractedToArr.map(currentMap => {
    if (numbers.includes(currentMap)) {
      newNumber = randomNumber();
      return newArr.push(newNumber);
    }
    return newArr.push(currentMap);
  });

  return newArr;
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
