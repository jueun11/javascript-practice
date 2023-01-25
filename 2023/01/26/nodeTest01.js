const num01 = (a, b) => {
  return a + b;
};

//node환경에서 module 내보내는 방법, 다른 파일에서 사용가능
module.exports = {
  moduleName: "num01 module",
  //모듈의 이름
  num01: num01,
};
