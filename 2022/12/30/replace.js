let text1 = "aAb1B2cC34oOp"
console.log(text1.replaceAll(/[0-9]/g,'').split(''));
//숫자가 아닌것만 배열로 만들어주는 방법

let text2 = "aAb1B2cC34oOp"
console.log(text2.replaceAll(/[^\d]/g,'').split(''));
//[]안에 ^은 not의 의미이다. ^ ~ 는 ~가 아닌것을 의미. \d는 0-9와 의미가 같다. 숫자라는 의미, ^를 표현식 시작때도 쓰기때문에 []안에 있는지 밖에 있는지 잘 확인해야한다. 안에 있어야만 not의 의미

//replace는 (a,b)가 있을경우 a를 찾아서 b로 바꿔준다. 해당식에서는 ''로 지워줬다.

//*replace와 replceAll의 차이점
//replace('ab','') 와 replaceAll(/[ab]/g,'')있다치면
//replace는 정확히 ab의 순서로 온것만 지워주고, 후자의 경우 a와b가 각각 흩어져있어도 지워준다.
//replaceAll에는 정규식이 들어갈 수 있다.
//정규 표현식이란 일정한 패턴을 가진 문자열 집합을 표현하기 위해 사용하는 형식 언어이다.
//정규 표현식에 대해 노션에 정리해두었다. 참고