const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};

// list.head
// {value: 90, next: {...}}
// list.head.value
// 90
// list.head.next.value
// 10
// list.head.next.next.value
// 89

class Node {
  //위의 head를 하나의 Node로 취급 그 head는 value와 next값을 가진다.
  // 위의 value, next가 한 세트로 노드가 된다.
  constructor(data) {
    //data를 받게되면
    this.data = data;
    this.next = null;
    //next는 null로 초기화, 위에서 마지막 노드의 next가 null이엇던거 참고
  }
}

class LinkedList {
  constructor() {
    //constructor는 객체가 생성될때 호출하는 함수이다. 초기값 설정가능
    let init = new Node("init");
    //생성자 함수 new를 통해서 새 Node를 만들어준다.
    //이때 init을 괄호에 넣으면 data에 init이 들어간다.
    this.head = init;
    //가장 처음에 오는 노드는 init이다로 초기화
    this.tall = init;
    //this의 마지막 노드도 init이다로 초기화
    this.now = undefined;
    //현재 순회하고 있는 노드
    this.count = 0;
    // 총 데이터 수
  }
  length() {
    return this.count;
    //length함수에 데이터 수를 출력하도록 한다.
  }
  append(data) {
    //데이터를 추가하는 함수 data를 인자로 받는다.
    let newNode = new Node(data);
    this.tall.next = newNode;
    //마지막 노드의 다음 노드가 새로 만든 노드가 되도록
    // 현재는 노드 하나가 head이자 tail이었다. 추가해주면 그 노드 다음에.. 2번재 노드가 새 노드가된다.
    this.tail = newNode;
    //마지막 노드가 새 노드가 된다.
    // 그리고 이전에 끝노드인 tail이 head노드인 init이었기에 새 노드로 바꿔줘야한다.
    // 이렇게 마지막 요소를 갱신해줘야 추가할때 마지막 노드가 제대로 바뀐채로 추가할 수 있다.
    this.count += 1;
    //데이터수를 1증가시킨다.
  }
}

l = new LinkedList();
//constructor부분이 생성과 함께 실행됨. 초기값 설정완료
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
console.log(l.length());
// 6
console.log(l);
console.log(l.head.data);
// init
console.log(l.head.next.data);
// 1

//head는 init이 맞다. 근데 길이가 6인이유는 .. head를 포함하지 않아서이다.
// append되야 1을 올리기 때문에 초기값만 있는 init만 있는 상태는 길이가 0으로 뜨는것
