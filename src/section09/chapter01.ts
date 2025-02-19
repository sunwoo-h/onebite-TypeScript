/* 분산적인 조건부 타입 */

// 타입변수로 'union 타입'을 할당하면 분산적인 조건부 타입으로 동작함
// union 타입 찢어져서 각각 계산하고 결과값만 합침
type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>;
// string | number

// 1. Exclude 조건부 타입 구현하기
// 타입 변수 2개 사용
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// number | never | boolean -> number | boolean

// 2. Extract 조건부 타입 구현하기
// Exclude에서 T와 never의 위치만 서로 바꿔주면 됨
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// never | string | never -> string

// 3. 분산적인 조건부 타입을 분산시키고 싶지 않을 때
// extends 기준 양옆 타입에 대괄호 [] 씌워주기!
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let noBunsan: StringNumberSwitch2<number | string>;
// number
