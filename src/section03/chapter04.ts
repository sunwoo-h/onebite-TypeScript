/* 대수 타입 */

// 1. 합집합 타입 : Union 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

// Union 타입으로 배열 타입 정의
let arr: (number | string | boolean)[] = [1, true, "hello"];

// Union 타입과 객체 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  // ✅
  name: "",
  color: "",
};

let union2: Union1 = {
  // ✅
  name: "",
  language: "",
};

let union3: Union1 = {
  // ✅
  name: "",
  color: "",
  language: "",
};

let union4: Union1 = {
  // ❌
  name: "",
}; // name 프로퍼티가 교집합에 해당하는 name만 있는 것도 가능한 거 아님?
// ㄴㄴ아님. 수학적 교집합 개념이랑 다름. '객체 단위'로 봐야함!

// 2. 교집합(Intersection) 타입

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
}; // 수학적 교집합의 의미와 다르게 모든 프로퍼티를 포함해야함
// 왜? -> 타입스크립트는 집합론적 개념을 기반으로 하지만, 구조적 타입 시스템을 사용하기 때문에 교집합(&)을 "모든 속성을 포함"하는 의미로 정의
