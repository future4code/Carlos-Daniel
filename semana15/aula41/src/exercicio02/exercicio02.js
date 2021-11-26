const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

let result = "Resultado: ";

switch (operation) {
  case "soma":
    result += firstNumber + secondNumber;
    break;
  case "sub":
    result += firstNumber - secondNumber;
    break;
  case "mult":
    result += firstNumber * secondNumber;
    break;
  case "div":
    result += firstNumber / secondNumber.toFixed(2);
    break;
  default:
    result += "invalid operation";
}

console.log(result);
