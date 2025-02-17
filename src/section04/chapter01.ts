/* 함수 타입 표현식과 호출 시그니처 */
// 1. 함수 타입 표현식
// 함수에 필요한 매개변수와 리턴값을 별도의 타입으로 선언
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

const add2: (a: number, b: number) => number = (a, b) => a + b;
// 이런 식으로 타입 표현식을 별도로 분리하지 않고 바로 써줄 수도 있음!

// 2. 호출 시그니처(콜 시그니처)
// 함수 타입 정의를 객체처럼 하는 거
type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입 구현을 위한 name 프로퍼티
};
