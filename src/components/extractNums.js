const getNumFromStr = () => {
  var result = "3+6/2+45-3";
  document.getElementById("res").innerHTML = `Result: ` + result.match(/\d+/g);
};

getNumFromStr();
