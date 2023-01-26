/*
unknown이 any보다 나은 이유는 할 수 없는 작업을 알 수 있도록
타입 검사를 수행할 수 있기 때문에,
물론 userInput이 항상 문자열인지, 문자열 혹은 숫자인지 미리 알 수 있다면
union타입을 쓰는게 더 좋음 string|number
*/
console.log("START");
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
