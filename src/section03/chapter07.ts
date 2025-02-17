/* 타입 좁히기 */
// 1. typeof 타입가드
// 기본 타입
function func(value: number | string) {
  // 매개변수 타입 지정
  if (typeof value === "number") {
    console.log(value.toFixed()); // number 타입 메소드
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // string 타입 메소드
  }
}

// 2. instanceof 타입가드
// : 내장 클래스 타입 or 직접 만든 클래스
function func2(value: number | string | Date | null) {
  if (value instanceof Date) {
    console.log(value.getTime());
  }
}

// 3. in 타입가드
// 직접 만든 타입
type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  if (value && "age" in value) {
    // error! : 이렇게 if 조건문 안에 value로 받아오는 구조로 쓰면 value에는 다른 타입들도 들어올 수 있어서 오류남
    console.log(`${value.name}은 ${value.age}살이나 드심`);
  }
}

// 따라서 value로 받아올 거면 아래처럼 매개변수로 오는 모든 경우도 타입 좁히기를 해줘야 오류 발생하지 않음!
function func4(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
