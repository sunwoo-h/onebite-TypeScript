/* 타입스크립트의 클래스 */
// 1. JS와 다르게 타입 지정해줘야 함
class Artist {
  // 필드
  // TS에서는 JS와 달리 필드에 타입 지정도 해주고, 초기화도 해줘야되는데,
  // 생성자 함수에서 타입 지정 잘 하면 초기화는 안 해도 됨!!
  name: string;
  age: number;
  position?: string; // 특정 필드를 선택적 프로퍼티ㄹ 설정하는 것도 가능!

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일하는둥");
  }
}

// 2. 상속
// TS에서 상속할 때 super메소드 안 쓰면 에러남
class ArtistSkill extends Artist {
  // 필드
  skill: string;

  // 생성자
  constructor(name: string, age: number, position: string, skill: string) {
    super(name, age, position); // super 메소드는 반드시 생성자 함수 최상단에 써야함!
    this.skill = skill;
  }
}
