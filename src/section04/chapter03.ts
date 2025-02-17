/* 함수 오버로딩 */
// 1. 버전들 선언부 -> 오버로드 시그니쳐(머리)
// 타입 선언과 헷갈 ㄴㄴ 함수 선언임
function func(a: number): void; // 버전 1
function func(a: number, b: number, c: number): void; // 버전 3

// 2. 실제 구현부 -> 구현 시그니쳐(몸통)
function func(a: number, b?: number, c?: number) {
  // 구현부에 옵셔널 프로퍼티 이용해서 b와 c는 없어도 됨
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1); // 버전 1 - 오버로드 시그니쳐
func(1, 2); // error! : 인자를 두개만 받는 함수는 선언부에 없음
func(1, 2, 3); // 버전 3 - 오버로드 시그니쳐
