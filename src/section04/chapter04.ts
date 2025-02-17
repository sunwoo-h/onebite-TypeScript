/* 사용자 정의 타입 가드 */
// 타입 가드 자체를 함수로 만들어버려서 사용!

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  // 'animal은 Dog 타입이다' 라는 뜻
  return (animal as Dog).isBark !== undefined; // 꿀팁 : Dog로 타입 단언해버려서 좁힘
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖어요");
  } else {
    console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
  }
}
