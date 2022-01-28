//Exercício 01
//A
function printNumbers(n: number) {
  if (n >= 0) {
    printNumbers(n - 1);
    console.log(n);
  }
}
//B
const printNumbersDescendingOrder = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbers(n - 1);
  }
};

//Exercício 02
export const calculateSum = (n: number, acc: number = 0): number => {
  if (n >= 0) {
    return acc;
  }
  return calculateSum(n - 1, acc + n);
};
//GABARITO 02
export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumTo(n - 1, acc + n);
};

// Exemplos de uso:
console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));

//Exercício 03
export const calculateSumToRefactored = (n: number): number => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1;
  }

  return sum;
};

// Exercício 04
export const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1);
    console.log(`Elemento ${i}: `, arr[i]);
  }
};
