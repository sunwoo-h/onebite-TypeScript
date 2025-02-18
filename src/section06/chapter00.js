/* 자바스크립트의 클래스 소개 */
// 1. 클래스 선언하기
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메소드
  study() {
    console.log("공부둥");
  }

  introduce() {
    console.log(`안녕하세요! 저는 ${this.name}입니다. 잘 부탁드립니둥`);
  }
}

const student1 = new Student("황선우", "4학년", "27");
student1.study(); // 공부둥 출력
student1.introduce(); // 자기소개 출력

// 2. 클래스 상속
// 인터페이스와 논리는 동일.
class StuentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // super를 이용해서 슈퍼 클래스인 Student의 생성자 함수 호출
    this.favoriteSkill = favoriteSkill;
  }

  // 메소드
  programming() {
    console.log(`내 주기술은 ${this.favoriteSkill}입니둥`);
  }
}

const student2 = new StudentDeveloper("팡선우", "4학년", "27", "타입스크립트");
student2.programming(); // 내 주기술 출력!
