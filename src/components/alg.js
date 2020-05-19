// const getNumFromStr = () => {
//   let result = "3+6/2+45-3";
//   console.log(`Result: ` + result.match(/\d+/g));
// };

// See board for info

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

// need randomNum function
// takes number(string) as input
// outputs a random idx from numbers ^ array

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
