/* keyof, typeof 연산자 */

// 1. keyof 연산자 : 객체 타입으로부터 프로퍼티의 모든 key들을 string union 타입으로 추출
interface Person {
  name: string;
  age: number;
  location?: string; // 선택적 프로퍼티로 추가
}

function getPropertyKey(person: Person, key: keyof Person) {
  // key는 name | age | location 으로 추출!
  // 타입을 추출하는 게 아님 주의( string | number가 아님!!)
  return person[key];
}

const person: Person = {
  name: "황선우",
  age: 27,
};

// 2. typeof와 keyof 함께 사용하기
function getPropertyKey2(person: Person, key: keyof typeof person) {
  // typeof 연산자를 이용해서 person 상수에 담겨있는 객체 타입을 할당받고,
  // {name: string, age: number}
  // 그걸 keyof 연산자로 또 빼옴
  return person[key];
}
