/* 인터페이스 */
// 타입 별칭과 문법만 다르고(등호 사용x) 기능은 비슷함
// 주로 객체 타입 정의할 때 사용
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "황선우",
  age: 27,
};


// 타입 별칭처럼 읽기전용과 선택적 프로퍼티 설정도 가능!
interface Person2 {
  readonly name: string;
  age?: number;
}

// 메소드 타입도 정의 가능(함수타입표현식, 호출 시그니처 둘 다 가능)
interface Person3 {
  sayHi: () => void; // 함수 타입 표현식 -> 메소드 오버로딩 불가능
  sayBye(): void; // 호출 시그니처 -> 메소드 오버로딩 가능
  sayBye(a: number, b: number): void; // 메소드 오버로딩!
}

// 인터페이스는 Union, Intersection 타입 정의 불가능!
type Type1 = number | string;
type Type2 = number & string;

interface Person4 {
  name: string;
  age: number;
} | number // error! : Union 불가능

// 인터패아스를 Union이나 Intersection으로 만들고 싶다면,
// 1. 타입 별칭과 함께 쓰거나
type Type3 = number | string | Person;
type Type4 = number & string & Person;

// 2. 따로 정의하지 말고 타입 주석에 직접 작성해서 사용해야됨
const person1: Person | string = {
  name: "이정환",
  age: 27,
};