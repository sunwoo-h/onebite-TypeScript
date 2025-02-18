/* 인터페이스 확장하기 */
// 1. 인터페이스 확장
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 2. 프로퍼티 재정의하기
interface Elephant extends Animal {
  name: "코끼리"; // 이런 슈퍼타입의 프로퍼티 재정의 가능.
  // 단, 이때 재정의할 타입은 string의 서브타입이어야 함
  wight: number;
}

// 3. 타입 별칭 확장하기
type Animal2 = {
  name: string;
  color: string;
};

// 이런식으로 타입 별칭으로 정의된 것도 확장 가능!
interface Rabbit extends Animal2 {
  earSize: string;
}

// 4. 다중 확장
// 이런식으로 Dog과 Cat의 프로퍼티를 모두 갖는 다중확장도 가능!
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  breed: "",
  isScratch: true,
};
