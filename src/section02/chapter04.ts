/* 타입 별칭과 인덱스 시그니처 */
// 1. 타입 별칭
// 타입 별칭도 타입 관련 문법이라 컴파일 하면 사라짐
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  // 타입 정의하면 객체에 타입 주석으로 붙일 수 있음
  id: 1,
  name: "황선우",
  nickname: "팡서누",
  birth: "2005.12.25",
  bio: "안녕하시오 동무",
  location: "북한 평양군",
};

// 2. 인덱스 시그니처
// 타입 정의시 간단하게 정의 가능
type User2 = {
  // id: number;
  // -> error! : 인덱스 시그니처를 사용할때 추가적인 프로퍼티 정의할 땐 value 타입이 호환되어야 함(string이어야 함)
  [key: string]: string;
};

// 특징 몇가지 더 있는데 정리 노션 확인 ㄱㄱ
