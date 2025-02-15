/* 객체 */
// 1. object 타입(X)
let user1: object = {
  id: 1,
  name: "황선우",
};

// user.id; -> error! : id프로퍼티 인식 불가

// object는 객체임을 표현하는 것 이외엔 아무 정보도 제공하지 않기 때문에 이렇게 쓰면 안됨

// 2. 객체 리터럴 타입(O)
let user2: { id: number; name: string } = {
  id: 1,
  name: "황선우",
};

user2.id; // 이제 접근 가능!
// 근데 지금은 이렇게 하는데 나중에 객체 만들 땐 interface로 타입 정의하긴 함 ㅋㅋ

// 3. 선택적 프로퍼티(Optional Property)
let user3: {
  id?: number; // 선택적 프로퍼티가 된 id. 이렇게 타입 설정 코드에 써줘야됨
  name: string;
} = {
  id: 1,
  name: "황선우",
};

user3 = {
  name: "홍길동", // id 생략 가능
};

// 4. 읽기전용 프로퍼티
let user4: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

// user4.name = "dskfd"; -> error! : name 프로퍼티 수정 불가능
