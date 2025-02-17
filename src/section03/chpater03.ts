/* 객체 타입의 호환성 */
// 1. 기본 원리
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "낙타",
  color: "파란색", // 낙타가 어케 파란색?
};

let dog: Dog = {
  name: "딸기",
  color: "빨간색",
  breed: "푸들",
};

// Animal의 프로퍼티 종류가 Dog의 프로퍼티 종류보다 적으니까
// Animal이 슈퍼클래스!(더 넓은 범위 포함)

animal = dog; // 가능
dog = animal; // error!

// 2. 초과 프로퍼티 검사
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

let book: Book = {
  name: "황선우의 기술 모음집",
  price: 99000,
  skill: "typescript", // error! : Book타입엔 skill 프로퍼티가 없음
  // 초과 프로퍼티 검사는 이렇게 직접 변수를 초기화 할때만 발생함
};

let book2: Book = programmingBook; // 이건 가능함 ㄷㄷ. 즉, 직접 초기화 해주는 게 아니라면 가능

// 초과 프로퍼티 검사는 함수의 매개변수에도 발생함
function func(book: Book) {}

func({ name: "황선우의 기술 모음집", price: 99000, skill: "typescript" }); // 얘도 매개변수에서 직접 초기화 할라니까 에러 발생

func(programmingBook); // 이렇게 변수로 만든 값 바로 넣으면 에러 발생 X
