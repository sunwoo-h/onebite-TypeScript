/* 함수 타입 */
// 1. 일반 함수 작성법
// 매개변수, 리턴값에 타입 지정
function func1(a: number, b: number): number {
  return a + b;
}

// 리턴값 타입은 자동 추론되기 때문에 생략 가능
function fun2(a: number, b: number) {
  return a + b;
}

// 2. 화살표 함수
// 일반 함수 선언과 마찬가지로 리턴값 타입 생락 가능!
const add = (a: number, b: number) => {
  // 리턴값 타입 생략!
  a + b;
};

// 3. 매개변수 기본값 설정
function introduce(name = "황선우") {
  // 타입 정의 생략(string 자동추론)
  console.log(`name : ${name}`);
}

// 4. 선택적 매개변수 설정
function introduce2(name = "황선우", tall?: number) {
  // 물음표 사용으로 옵셔널 매개변수 설정
  // 주의 : 선택적 매개변수는 필수 매개변수 앞에 올 수 없음!
  console.log(`name : ${name}`);
  console.log(`tall : ${tall}`);
}

introduce2("황선우", 188); // 이렇게 tall 값 써도 되고
introduce2("황선우"); // tall 값 안 써도 됨

// 이때, tall처럼 옵셔널 파라미터로 지정해준 값의 타입은 자동으로 undefined와 union됨!
// 그래서 number 타입일 거라고 기대하고 쓰려면 타입좁히기 필요
function introduce3(name = "이정환", tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    // number 타입으로 타입좁히기!
    console.log(`tall : ${tall + 10}`);
  }
}

// 5. rest 파라미터 타입 지정
function getSum(...rest: number[]) {
  // 요런 식으로 "배엻 타입"으로 설정해줘야 함!
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

// 이렇게 튜플 형식 선언도 가능!
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // OK
getSum2(1, 2, 3, 4); // error! : 튜플이 배열 3개만 받도록 설정되었기 때문!
