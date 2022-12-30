let my_string = "bus";
function solution() {
  console.log(Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join(''));
  console.log(Array.from(my_string).filter(el => ['a', 'e', 'i', 'o', 'u'].includes(el)));
  //!는 부정의 의미가 맞다. !가 없으면 u만 반환한다.
  //t는 요소를 의미한다.
  //요소가 해당 배열을 포함하고 있지않은것.. 예를들어 b면 해당배열을 포함하지 않으므로 필터로 걸러진다.
  //정확히는 해당 배열이 아닌것을 포함할경우  해당배열 요소와 일치하지않으면 걸러지는거다. 
}
solution(my_string);