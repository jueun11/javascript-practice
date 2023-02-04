//하고 싶은 내용.
// 콘솔을 인자로 넘긴 수만큼 찍고싶다.
// 이때, 수가 홀수일때만 or 홀수일때만 찍는 경우를 만들고 싶다.

//공통된 내용. 콘솔을 찍는다.

//다른 내용
// 반복중 짝수와 홀수를 구분하고 싶다.

//*공통된 내용을, 각 경우의 수에 해당하는 함수를 매개변수로 설정하여 만든다.
const logAll = (n, oddNumber, evenNumber) => {
  for (let i = 0; i < n; i++) {
    oddNumber(i);
    evenNumber(i);
    // !여기에 꼭 i를 전달해줘야한다.
  }
};

// *각각의 내용.홀수와 짝수 경우를 적어준다.

const oddNumber = (i) => {
  if (i % 2 !== 0) {
    console.log(`${i} :: 홀수이다.`);
  }
};

const evenNumber = (i) => {
  console.log("실행");
  // ! i를 전달해주지않으면, 매개변수로 받을것이 정해지지않아 밑의 if문을 실행할 수 없게된다. (if문 위의부분을, 그냥 해당 함수를 for문에 따라 실행할 뿐이다.)
  if (i % 2 === 0) {
    console.log(`${i} :: 짝수이다.`);
  }
};
//저기 logAll에서 실행하면, i를 변수로 사용하므로, 여기도 i를 넣어주었다.

logAll(5, oddNumber, evenNumber);
