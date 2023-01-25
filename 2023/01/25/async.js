// *async

function basic() {
  return 'basic';
}

async function Async() {
//앞에 async 붙여주면 helloAsy에 마우스 올리면 Promise가 있음
// *함수 앞에 async만 붙여줘도 해당 객체를 promise로 만든다
  return 'Async';
  //여기 return 값은 해당 promise의 resolve - 결과값이 된다.
}


//? promise객체니까 then도 가능
Async().then((resolve)=>{
  console.log(resolve); //Async출력
});
