let a = "apple" && "banana";
console.log(a);
// 문자열은 ture, && 은 and의 개념이라 banana까지 평가해야함. 그리고 마지막 평가한 banana 출력
let b = false || "red";
console.log(b);
// \\은 or의 개념. false로 처음 피연산자가 거짓이면 두번째 피연산자 확인, 두번째 피연산자는 true, 두번째 피연산자 출력
//만일 false가 아니라 true가 앞에 오면 그 앞까지만 평가하고 그이상은 평가하지않는다. 이런 과정이 단축평가