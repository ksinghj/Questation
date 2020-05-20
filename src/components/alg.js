// const getNumFromStr = () => {
//   let result = "3+6/2+45-3";
//   console.log(`Result: ` + result.match(/\d+/g));
// };

// See board for info

// random number()
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

export const extractNums = input => {
  let extractedToArr = input.split("");
  console.log(`extractedToArr = `, extractedToArr);
  let replaceNums = extractedToArr.map(currentIdx => {
    if (numbers.includes(currentIdx)) {
      currentIdx = randomNumber;
      console.log(`New currentIdx = `, currentIdx);
    }
  });

  console.log(`replaceNums = `, replaceNums);

  // compare currentIdx to every value in numbers
  // if they match, replace it with a random number from numbers
  // if !match, move on to next currentIdx
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
