//객체지향적이지 않은.. object 자료형
const one01 = {
  name : "kim",
  age : 22,
  gender : "male"
}
const one02 = {
  name : "ju",
  age : 25,
  gender : "female"
}
const one03 = {
  name : "eun",
  age : 26,
  gender : "male"
}
console.log(one01);
console.log(one02);
console.log(one03);


//객체지향적 표현
class human{  
  constructor(name,age,gender){
    //생성자 - 클래스에 있는 속성값을 초기화 시켜주는 기능
    this.name = name;
    //this는 다른곳에 있는 name이 아니라 해당 클래스에 있는 name이란 것
    this.age = age;
    this.gender = gender;
  }
}

//객체 만들기 new를 써야한다.
const two01 = new human("kim",22,"male");
const two02 = new human("ju",25,"female");
const two03 = new human("eun",26,"male");

//human이란 틀을 만들고 계속해서 찍어낼 수 있다. 이전에는 하나의 오브젝트를 만드려면 매번 name,age,gender같은 속성을 다 써줘야했지만, 객체지향적으로 작성하면 값만 넣어주면된다.

console.log(two01);
console.log(two02);
console.log(two03);

//상속에 대하여

class GoodHuman{  
  constructor(name){
    this.name = name;
    //겹치는걸 가져옴
  }
}
//공통되는 정보가 더 필요할 경우 여기다가만 추가하면되서 수정이 편리하다.

class Human extends GoodHuman {  
  //위의 겹치는거 빼놓은 클래스를 가져옴..추상화 작업
  constructor(name,age,gender){
    super(name)
    //super는 상위 클래스를 부를때 사용한다. this는 해당 human은 이제 GoodHuman을 상속받은 자식이 되었기에 사용할 수 없다.(해당위치에 있는것이 아니라 부모위치에 있음).. 부모의 속성(name)을 가져온다. 
    //this는 다른곳에 있는 name이 아니라 해당 클래스에 있는 name이란 것
    this.age = age;
    this.gender = gender;
  }
}
class unique extends GoodHuman{  
  constructor(name,age,character){
    super(name)
    this.age = age;
    this.character = character;
  }
}
class Health extends GoodHuman{
  constructor(name,height,weight){
    super(name)
    this.height = height;
    this.weight = weight;
  }
  getHeight(){
    return this.height + "cm";
  }
  //class안에 함수를 만들어 줄 수 있다. 이는 getHeight를 호출하면 값 뒤에 cm이라는 단위를 붙여주는 방식
  //함수안에 변수와 관련된 함수(여기서는 height)를 넣을 수 있다. if문도 사용가능.. 활용하기 좋다.
}

console.log(new Health("eun",165,53));
let park = new Health("eun",165,53);
console.log(park.getHeight());



