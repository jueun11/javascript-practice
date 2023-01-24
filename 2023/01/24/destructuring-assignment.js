const person = {
  name: "jueun",
  age: 26,
  gender: "female"
};

console.log(person.name);

const {name, age:myAge , tall = 15} = person;
//key값을 기준으로 가져온다. 순서상관 x 이거 나중에 리액트 props가져올때 많이씀..
// : 하고 값 쓰면 그 값이 변수명이된다.

//기본값 또한 설정 가능하다.
let one = person.age;
console.log(name);
console.log(one);
console.log(myAge);
console.log(tall);

