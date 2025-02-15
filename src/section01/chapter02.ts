/* 뱌열과 튜플 */
// 1. 단일 타입 배열
// (1) 타입뒤에 [] 붙임 (보통 사용)
let numArr: number[] = [1, 2, 3]; // number 타입 배열
let numStr: string[] = ["a", "b", "c"]; // string 타입 배열

// (2) 제테릭 표기법
let boolArr: Array<boolean> = [true, false, true];

// 2. 다중 타입 배열
// 유니온 타입 사용
let multiArr: (number | string)[] = [1, "황선우"];

// 3. 다차원 배열
let doubleArr: number[][] = [
  [1, 2],
  [1, 2, 3],
];

// 4. 튜플
// 길이 고정x, 타입과 개수를 고정시키는 역할
let tup1: [number, number] = [1, 2];

tup1.push(1); // number타입 push 가능
// tup1.push("황") -> error! : string타입 push 불가능

let users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [3, "황선우"], -> error! : 타입 순서 맞춰줘야 됨
];

// users.push(["황선우",5,3]) -> error! : 2차원 배열에선 딱 맞춰줘야 됨
