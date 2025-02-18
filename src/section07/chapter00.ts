/* 제네릭 소개 */
// 제네릭 함수는 두루두루 모든 타입의 값을 다 적용할 수 있는 범용적인 함수
// 1. 제네릭 함수 문법
function func<T>(value: T): T {
  return value;
}

let num = func(10); // num의 값으로 number 타입

// 2. 타입 변수에 할당할 타입 직접 명시
function func2<T>(value: T): T {
  return value;
}

let arr = func<[number, number, number]>([1, 2, 3]);
// arr는 튜플 타입이 됨
