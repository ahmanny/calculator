const action = document.querySelector(".numbers");
const input = document.querySelector(".input");
const ans = document.querySelector(".result");
let expression = "";
// const exp = "";
let a = 0;
action.addEventListener("click", (e) => {
  console.log(e.target.value);
  const values = e.target.value;
  if (values !== undefined) {
    if (values == "C") {
      expression = "";
      ans.value = 0;
      input.value = "";
      return true;
    } else if (values == "log") {
      let exp = "log(" + expression + ")";
      display(exp);
      expression = Math.log(expression);
    } else if (values == "radic") {
      let exp = "√" + expression;
      display(exp);
      expression = Math.sqrt(expression);
    } else if (values == "%") {
      let exp = expression + "%";
      display(exp);
      expression = expression / 100;
    } else if (values == "sin") {
      let exp = "sin(" + expression + ")";
      display(exp);
      expression = Math.sin(expression);
    } else if (values == "cos") {
      let exp = "cos(" + expression + ")";
      display(exp);
      expression = Math.cos(expression);
    } else if (values == "tan") {
      let exp = "tan(" + expression + ")";
      display(exp);
      expression = Math.tan(expression);
    } else if (values == "!") {
      let exp = expression + "!";
      display(exp);
      expression = factorial(expression);
    } else if (values == "=") {
      let input_display = expression;
      display(input_display);
      const answer = eval(expression);
      expression = answer;
    } else {
      expression += values;
    }
    if (expression == undefined) {
      expression = "";
    } else {
      ans.value = expression;
    }
    // expression += values;
  }
});

function factorial(value) {
  let sum = 1;
  for (let i = value; i > 0; i--) {
    sum = sum * i;
  }
  return sum;
}
// function percentage() {
//   var num=document.getElementById("input").value;
//   var percent=num/100;
//   document.getElementById("result").value=percent;
// }
function display(value) {
  document.getElementById("input").value += value;
}
// function calculate(value) {
//   var exp=document.getElementById("input").value;
//   var answer=eval(exp)
//   document.getElementById("result").value=answer;
//   document.getElementById("input").value=exp
// }
