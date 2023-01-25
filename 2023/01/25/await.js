function delay (ms) {
  return new Promise ((resolve) => {
    // setTimeout(() => {
    //   resolve();
    // }, ms);

    // ? 콜백함수 안에 resolve를 호출하는것만 있으면 콜백함수 자체를 resolve로 해줘도 된다.
    setTimeout(resolve,ms);

  });
}


// async function Async() {
//   return delay(3000).then(() => {return 'Async';});
//   //delay는 promise이다. 3000을 인자로 가져감.
//   //delay는 3초를 딜레이시키는 역할 외에는 없다. delay.then은 delay의 resolve를 의미한다.
//   //얼추 delay에 3000을 넣은채로 실행하고. 그다음에 then을 실행하는 것이다. 왼쪽 - 오른쪽으로 실행
//   //그리고 이 결과값은 Async라는 promise의 resolve가 된다.
// }

//* await을 활용
async function Async() {
  await delay(3000);
  // await을 붙이면 비동기 함수가 동기처럼 작동한다.
  // await키워드가 붙으면, await부분이 실행 완료될 때까지 밑의 함수를 수행하지 않는다. 블로킹한다.
  // async 키워드가 붙은 함수 내에서만 await을 사용할 수 있다.
  return 'Async'
}
// Async().then((resolve)=>{
//   console.log(resolve);
// });


async function main () {
  const res = await Async();
  //여기 들어가는 Async에 await이 있기에 앞에 꼭 async 키워드가 있어야한다.
  console.log(res);
}

main();

