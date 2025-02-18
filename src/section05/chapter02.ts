/* 인터페이스 선언 합치기 */
// 1. 선언 합침
// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언 불가능.
type Person = {
  name: string;
};

type Person = {
  age: number; // error! : Person 타입 정의 중복!
};

// But 인터페이스는 가능함! -> 자동으로 합쳐줌!!
interface Human {
  name: string;
}

interface Human {
  age: number;
}

const person: Human = {
  name: "황선우",
  age: 27,
};
