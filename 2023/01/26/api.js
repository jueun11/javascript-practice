async function getDate () {
  let oldAnswer = await fetch('https://jsonplaceholder.typicode.com/posts');
  // await을 써서 해당 json정보들을 다 받아와야 뒤의 식이 실행되도록 했다.
  let newAnswer = await oldAnswer.json();
  // await을 써서 oldAnswer에 넣은 파일중 json부분만 다 받아와야 뒤의 식이 실행되도록 했다.
  console.log(newAnswer);
    // fetch는 json 주소 받아오는 내장함수이다.
  
}

getDate();

