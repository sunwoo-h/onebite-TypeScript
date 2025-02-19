/* 유틸리티 타입  */

// 타입스크립트가 자체적으로 제공하는 특수한 타입들

// 2. 조건부 타입 기반

// (1) Exclude : 타입 제거한 뒤 반환
type Exlcude<T, U> = T extends U ? never : T;

// (2) Extract : 타입을 추출하여 반환
type Extract<T, U> = T extends U ? T : never;

// (3) ReturnType : 할당된 타입의 타입을 추출해서 반환
// 특 : infer추론 사용!
type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
// string

type ReturnB = ReturnType<typeof funcB>;
// number
