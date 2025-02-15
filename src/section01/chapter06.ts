/* any와 unknown */
// 1. any
// : 치트키
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;
// 위 코드 다 가능(다양한 타입 저장, 연산 및 메소드 사용)
// 타입스크립트는 변수를 초기화할 때 초기화 하는 값을 기준으로 추론하는데,
// any로 설정하면 그냥 암거나 다 넣을 수 있음

let num: number = 10;
num = anyVar;
// 그리고 이런 식으로 다른 타입에 값으로도 들어갈 수 있음

// 근데 이렇게 쓰고나서 컴파일하면 런타임 에러 발생함.
// 즉, any 쓰면 타입스크립트 쓰는 의미가 퇴색됨
// 때문에 any는 최대한 사용 지양!

// 2. unknown
// : any와 비슷하지만 좀 더 안전
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// any처럼 어떤 값이든 다 저장할 수 있지만,

// num = unknownVar; -> error! : 값으로 사용 불가
// nknownVar * 2 -> eroor! : 연산 및 메소드 사용 불가

// any와 다르게 다른 타입의 값으론 들어갈 수 없고, 연산 및 메소드도 사용 불가
// 즉, unknown은 오직 값을 저장하는 행위만 가능함!

// 결론 : 특정 변수가 당장 어떤 값을 받게 될 지 모른다면 any 타입으로 정의하는 것 보단 unknown 타입을 이용하는게 훨씬 안전한 선택!
