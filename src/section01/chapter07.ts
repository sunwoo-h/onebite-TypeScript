/* void와 never */
// 1. void
function func1(): void {
  console.log("hello");
}
// 보통 이렇게 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용!
// 이렇게 쓰면 return문 생략해줘도 됨 (null은 return 써야 됨 / undefined는 return 안 써도 됨)

let a: void;
a = undefined;
// 이런 식으로 변수의 타입으로도 지정할 수 있음
// 그러나 void 타입의 변수에는 undefiend 이외의 다른 타입의 값은 담을 수 없음(never는 걍 공집합이라 안됨))
// 왜냐면 void가 undefined의 슈퍼타입이기 때문

// 2. never
function func2(): never {
  while (true) {}
}

function func3(): never {
  throw new Error();
}
// 위와 같이 무한루프 돌거나 에러뜨는 것처럼
// 아무런 값을 반환할 수 없는 함수에 대해서 리턴타입을 never로 설정!
// never타입은 공집합이라고 생각!(타입으로 쓰여서 값 할당받는 것도 안되고, 값으로도 못 씀)
