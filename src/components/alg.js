import _ from "lodash";
import { create, all } from "mathjs";
// mathjs config
const config = {};
const math = create(all, config);
// random number()
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

let questionsArr = [];
let chunked = [];

const evaluateAnswer = questionAsObjwArrs => {
  let newArr = [];

  let noObj = Object.values(questionAsObjwArrs);
  newArr.push(noObj);

  newArr.map(nestedArr => {
    return nestedArr.map(q => {
      let asString = q.join("");
      questionsArr.push(asString);
      return questionsArr;
    });
  });

  chunked = _.chunk(questionsArr, 5);
  return chunked;
};

export function getAnswer(obj) {
  let manipulated = evaluateAnswer(obj);
  return manipulated.map(expr => {
    let ans = math.evaluate(expr);
    return ans;
  });
}
