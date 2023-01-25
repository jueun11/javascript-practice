function num01(a,b) {
  return new Promise((resolve,reject) => {
    //Promise를 쓰면 콜백이 따로 필요없다. 원래는 a,b,c고 c에 결과값을 넣어주었음
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function num02(a) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function num03(a) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      const res = a - 5;
      resolve(res);
    }, 2000);
  });
}

// !콜백지옥 만들기.. 이거 더 심해지면 ㄹㅇ지옥
// num01(1,2, (res01)=> {
//   console.log(`num01 완료 : 결과 ${res01}`);
//   num02(res01,(res02) => {
//     console.log(`num02 완료 : 결과 ${res02}`);
//     num03(res02,(res03) => {
//     console.log(`num03 완료 : 결과 ${res03}`);
//     });
//   });
// })

// * promise를 콜백식으로 사용. 올바른 사용 x 
// num01(4,7)
// .then((res01)=> {
//   console.log("1번 작업성공 : ", res01);
//   num02(res01).then((res02) => {
//     console.log("2번 작업성공 : ", res02);
//     num03(res02).then((res03)=>{
//     console.log("3번 작업성공 : ", res03);
//     });
//   });
// });

// todo 올바른 사용, then 체이닝
// num01(4,7)
// .then((res01)=> {
//   console.log("1번 작업성공 : ", res01);
//   return num02(res01);
//   //첫번째 then의 반환값은 num02(res01)이다. num02에 인자로 결과값(num01의 res01)을 넣은것일뿐.
//   //밑에 점 찍히기 전의 부분은 결국 num02(res01)
// }).then((res02)=>{
//   console.log("2번 작업성공 : ", res02);
//   return num03(res02);
// }).then((res03) => {
//   console.log("3번 작업성공 : ", res03);
// });
//리액트 props 하위 모듈로 넘기는거랑 비슷한느낌..

// ? 중간에 다른 작업을 넣는 응용
const num02Promise = num01(4,7)
.then((res01)=> {
  console.log("1번 작업성공 : ", res01);
  return num02(res01);
});

console.log('중간에 들어가는 작업들 ...');
console.log('중간에 들어가는 작업들 ...');
console.log('중간에 들어가는 작업들 ...');
console.log('중간에 들어가는 작업들 ...');

num02Promise.then((res02)=>{
  console.log("2번 작업성공 : ", res02);
  return num03(res02);
}).then((res03) => {
  console.log("3번 작업성공 : ", res03);
});
