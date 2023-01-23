let country = "cn";

switch(country) {
  case "ko" :
    console.log("한국");
    break;
  case "cn" :
    console.log("중국");
    break;
  case "jp" :
    console.log("일본");
    break;    
  case "uk" :
    console.log("영국");
    break;

  //eles와 같은 역할 
  default:
    console.log('미분류');
    break;
}

//* break를 넣는 이유
// 만일 break를 넣지 않는다면 예를 들어 한국이 참이면 그 밑의 부분도 전부 실행해버린다.
// 맞는 case를 찾으면 그 이후 부분을 전부 실행
// break가 끊는 역할이다. break을 사용하면 해당 부분 까지만 실행이다.