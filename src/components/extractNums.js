// const getNumFromStr = () => {
//   let result = "3+6/2+45-3";
//   console.log(`Result: ` + result.match(/\d+/g));
// };

export const getNumFromStr = input => {
  // let result = "3+6/2+45-3";
  console.log(`Extracted numbers: ` + input.match(/\d+/g));
};
