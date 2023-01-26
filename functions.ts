function add(n1: number, n2: number) {
  return n1 + n2;
}

// undefined 는 실제 값을 반환하지 않을떄
// return;
// function printResult(num: number): undefined {
//   console.log("Result: " + num);
//   return;
// }

// void = 값을 반환하지 않는 함수를 사용하는 경우에 표준으로 사용
// 명시적으로 지정할 수 있지만, 타입스크립트는 이 코드를 추론할 수 있음
function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));
// console.log(printResult(add(5, 12))); undefined

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
