// import { create, all } from "mathjs";
// // mathjs config
// const config = {};
// const math = create(all, config);
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

// let noObj;
let answersArr = [];
let newArr = [];

export const evaluateAnswer = questionAsObjwArrs => {
  // questionAsObjwArrs.map(set => {
  //   noObj = Object.values(set);
  //   return newArr.push(noObj);
  // });
  let noNest = Object.values(questionAsObjwArrs);
  newArr.push(noNest);

  let string = newArr.map(arr => {
    return (arr = arr.join(""));
  });

  answersArr.push(string);

  // newArr.map(setArr => {
  //   // from [[q], [q], [q]] => [q, q, q] (remove nest)
  //   return setArr.map(q => {
  //     q.join("");
  //     return answersArr.push(q);
  //   });
  // });

  console.log(answersArr);

  // backToString = questionAsObjwArrs.join(""); // ["4", "+", "3"] => ["4+3"]
  // newArr.push(backToString);
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
