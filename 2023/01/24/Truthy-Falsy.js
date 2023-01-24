let a = -2;

if(a) {
  console.log("true");
  //값이 있는거, 0제외
  //[] {} 비어있는것도 있다고 취급한다
} else{
  console.log("false");
  //값이 없는거 거짓
  //null, "", undefined
  //대신 0도 거짓이다.
}