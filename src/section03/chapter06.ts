/* 타입 단언 */

// 1. 빈 객체로 초기화하기
type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 타입 단언을 해줌으로써 빈 객체 초기화 가능!
person.name = "";
person.age = 23;

// 2. 초과 프로퍼티 검사 피하기
type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog; // 타입단언을 해줌으로써 초과 프로퍼티 검사 피함!

// 3. 타입 단언의 조건
let num1 = 10 as never; // OK
let num2 = 10 as unknown; // OK

let num3 = 10 as string; // error! : 서로 슈퍼-서브 관계가 아님!

// 4. 다중 단언
// 타입 단언의 조건을 억지로 맞춰주기 위해 사용.(사용 지양!)
let num4 = 10 as unknown as string;

// 5. const 단언
// const 선언한 것과 동일한 역할 수행!

let num5 = 10 as const;
// 10 Number Literal 타입으로 단언됨

let cat = {
  name: "김덕배",
  color: "orange",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨

// 6. Non Null 단언
// undefined이거나 null이 아님을 의미!
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length; // 느낌표 붙이면 됨
