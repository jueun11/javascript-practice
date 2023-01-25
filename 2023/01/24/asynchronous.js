
// *동기 방식
// function num1 () {
//   console.log('실행 완료');
// }


// num1();
// console.log("마지막 줄");


// *비동기 방식을 동기방식으로
function num2 (a, b, cb) {
  setTimeout(() => {
    const plusNum = a + b;
    cb(plusNum);
    //콜백 함수 호출
    //세번째 cb는 plusNum이다.
  },3000);
}
// num2(3,4, (plusNum) => {console.log("함수실행완료", plusNum)});
num2(3,4, (p) => {console.log("2번완료", p)});
//세번째 인자에 콜백함수를 넣었다.plusNum이 아니라 다른거여도 상관없다
//위의 cb(plusNum)는 세번째 인자에 plusNum을 담은것일 뿐이다. 그 3번째 인자는 현재 p라고 칭했고
//p는 console.log("함수실행완료", p)를 실행한다. p=세번째 인자, 위의 함수에서 3번째 인자는 plusNum


function num3(a,b) {
  setTimeout(()=>{
    const plusNum3 = a * 2;
    b(plusNum3);
  },1000);
}

num3(3,(b) => {console.log("3번완료",b)});

function num4(a,b) {
  setTimeout(()=>{
    const plusNum4 = a * -1;
    b(plusNum4);
  },2000);
}


num4(7,(b) => {console.log("4번완료",b)});

console.log("마지막줄");