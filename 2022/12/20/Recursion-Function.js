//재귀함수 1부터 10까지 더하기
function num(b){
  if(b >= 10){
    //if()안에 num(b)를 넣으면 안된다. 그렇게 할 경우 무한으로 불러들이기에 제대로 실행되지 않는다.
    return b;
    //해당 if문을 충족하면 b를 return하고 끝낸다.
  }
    return b + num(b + 1);
    // if문을 충족하기 전까지는 해당 식을 계속 반복한다. b값에 num(0 + 1)...1을 계속 더해간다.
    //그러다 10이되면 위의 if문에 따라 끝난다
}

console.log(num(0));



