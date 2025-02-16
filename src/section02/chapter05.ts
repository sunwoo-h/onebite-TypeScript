/* 열거형 타입 */
// 열거형(enum) 타입 : 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 타입 별칭과 다르게 선언 시 등호 사용 x

// 1. 숫자형 열거
enum Role {
  ADMIN = 0,
  USER = 1,
  GEUST = 2,
}

// 2. 문자형 열거
enum Country {
  korean = "ko",
  indian = "in",
}

const user1 = {
  name: "이형규",
  role: Role.ADMIN, // 0
  country: Country.korean, // ko
};

const user2 = {
  name: "황선우",
  role: Role.USER, // 1
  country: Country.korean, // ko
};

const user3 = {
  name: "이도윤",
  role: Role.GEUST, // 2
  country: Country.indian, // in
};

// enum은 타입이 아니기 때문에 컴파일 시 다른 타입들처럼 사리지지 않고 자바스크립트 객체로 변환됨.
// 그래서 이렇게 객체 점 표기법처럼 값으로 사용할 수 있는 거임
