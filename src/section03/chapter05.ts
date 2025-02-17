/* 타입 추론 */
// 1. 타입 추론이 가능한 상황들
// (1) 변수 선언
let a = 10;
// number 타입으로 추론

let b = "hello";
// string 타입으로 추론
b = 10; // error! : JS와 다르게 한번 추론되면 타입 안 바뀜!!!

let c = {
  id: 1,
  name: "황선우",
  profile: {
    nickname: "sunwoo",
  },
  urls: ["gg"],
};
// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

// (2) 구조 분해 할당
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// (3) 함수의 반환값
function func1() {
  return "hello";
}
// 반환값이 string 타입으로 추론된다

// (4) 기본값이 설정된 매개변수
function func2(message = "hello") {
  return "hello";
}

// 2. 주의해야할 상황들
let d; // "암시적인" any로 추론

// (1) any의 진화
d = 10; // 근데 만약, 여기서 d : any = 10; 처럼 "명시적"으로 any타입 지정해주면 진화 안하고 밑의 코드들도 any타입으로 설정됨
d.toFixed();

d = "hello";
d.toUpperCase();
d.toFixed(); // error! : d는 "hello"에 의해 string타입으로 진화해서 number 메소드 사용할 수 없음

// (2) const 함수의 추론
// const는 바뀔일이 없기 때문에 let보다 더 좁은 타입으로 추론함 ㅇㅈㅇㅈ.

const num = 10;
// 10 Number Literal 타입으로 추론

const str = "hello";
// "hello" String Literal 타입으로 추론

// 3. 최적 공통 타입
let arr = [1, "string"];
// 요런 식으로 다양한 타입쓰면 알아서 최적의 공통 타입으로 추론해줌!
// (string | number)[] 타입으로 추론
