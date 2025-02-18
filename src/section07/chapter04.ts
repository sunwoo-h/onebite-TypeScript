/* 제네릭 클래스 */

class List<T> {
  // 클래스 명 뒤에 타입 변수 붙임
  constructor(private list: T[]) {} // 생성자 함수의 매개변수로 타입 변수 붙임

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 아래 코드 처럼 보내면 알아서 타입추런 해줌
const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2"]);

// 만약 타입변수의 타입을 직접 설정해주고 싶다면 아래 코드 처럼 직접 써주면 됨
const numberList2 = new List<number>([1, 2, 3]);
const stringList2 = new List<string>(["1", "2"]);
