/* 조건부 타입 */

// 'extends'와 '삼항 연산자'를 이용해 각기 다른 타입 정의 도와줌
// 1. 조건부 타입 에쩨
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;
// number

// 2. 제네릭 조건부 타입
// 조건부 타입은 제네릭 타입과 같이 쓸 때 위력이 극대화 됨
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

// 실용적인 예제 : 논리 흐름 과정 핸드북 참고!
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
// string

let result2 = removeSpaces(undefined);
// undefined
