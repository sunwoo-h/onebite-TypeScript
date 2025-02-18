/* 제네릭 인터페이스, 제네릭 타입 별칭 */

// 1. 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  // 제네릭 인터페이스 쓸 떄에는 이런식으로 할당할 타입들을 명시해 줘야함
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 1-1. 인덱스 시그니처와 함께 사용
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 2. 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

// 3. 제네릭 인터페이스 활용 예
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  // 타입 변수로 입력 타입에 따라 profile이 결정되도록 해줌
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 타입 변수로 Student 타입을 보내줌으로써 타입 좁히기를 안 해도되고, 코드가 간결해짐!
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
