/* 맵드 타입 */

// '기존의 객체 타입을 기반'으로 새로운 객체 타입을 만드는 기능
// 인덱스 시그니처는 그냥 새로운 객체 타입 정의할 때 쓰는 거고,
// 얘는 기존의 객체 타입을 기반으로 함!
// 중복 코드를 줄일 수 있다는 장점 존재

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
  // 1. 맵드 타입 문법 -> 외우기
  // 의미
  // key가 “id” 일 때 → id : User[id] → id : number
  // key가 “name”일 때 → name : User[user] → name : string
  // key가 “age”일 때 → age : User[age] → age : number
};

// 즉, 아래의 코드와 동일 의미 가짐
// {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// 2. keyof 연산자를 이용해서 코드 줄이기
type PartialUser2 = {
  readonly [key in keyof User]?: User[key];
  // 추가로 맵드 타입은 이런식으로 readonly나 선택적 프로퍼티 달아줄 수 있음!
};
