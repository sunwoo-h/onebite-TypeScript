/* 서로소 유니온 타입 */
// 수학적 집합 개념과 유니온은 다른 개념임을 주의!(핸드북, 노션 참고!)
type Admin = {
  tag: "ADMIN"; // string 리터럴 타입
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER"; // string 리터럴 타입
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST"; // string 리터럴 타입
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입 생성

function login1(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

// 스위치 문으로 더 직관적으로 표현 가능!
function login2(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
      break;
    }
  }
}
