/* 접근제어자 */
// 클래스에서 특정 '필드' or '메소드'를 접근할 수 있는 범위 설정
// JS에는 없고 TS에만 있다는 게 킥(JS에도 클래스 있는디..)

// 1. public : 모든 범위에서 접근 가능
class Artist {
  // 필드
  name: string; // 자동으로 public
  age: number; // 자동으로 public
  position?: string; // 자동으로 public

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  introduce() {
    console.log(`안녕하십니까 제 이름은 ${this.name}입니다.`);
    console.log(`나이는 ${this.age}이고 포지션은 ${this.position}입니다!`);
  }
}

// 2. private : 클래스 내부에서만 접근 가능
class Artist2 {
  // 필드
  private name: string;
  private age: number;
  private position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // introduce 메소드는 클래스 내부의 메소드니까 필드 접근가능!
  introduce() {
    console.log(`안녕하십니까 제 이름은 ${this.name}입니다.`); // 필드 접근 가능
    console.log(`나이는 ${this.age}이고 포지션은 ${this.position}입니다!`); // 필드 접근 가능
  }
}

// 3. protected : 클래스 외부에선 접근 안되지만 클래스 내부와 파생클래스에선 접근 가능!
class Artist3 {
  // 필드
  protected name: string;
  protected age: number;
  protected position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // introduce 메소드는 클래스 내부의 메소드니까 필드 접근가능!
  introduce() {
    console.log(`안녕하십니까 제 이름은 ${this.name}입니다.`); // 필드 접근 가능
    console.log(`나이는 ${this.age}이고 포지션은 ${this.position}입니다!`); // 필드 접근 가능
  }
}

class ArtistSkill extends Artist3 {
  protected skill: string;

  constructor(name: string, age: number, position: string, skill: string) {
    super(name, age, position);
    this.skill = skill;
  }

  sayMyName() {
    console.log(`제 이름은 ${this.name}입니당`); // protect로 선언한 name은 서브 클래스에서도 접근 가능!!(즉, 쌍방향임)
  }
}

const artist = new ArtistSkill("황선우", 26, "보컬", "노래부르기");
artist.sayMyName();

// 4. 접근제어자를 이용해서 클래스 코드 줄이기
// 접근제어자는 필드 말고 매개변수에도 선언이 가능한데,
// 이렇게 매개변수에 접근제어자를 붙여주면
// 필드 선언, this.필드 코드를 삭제해도 됨!
// 보통 타입스크립트에서 클래스 선언은 이 방식으로 함

class Artist4 {
  // 생성자 -> 매개변수에 접근제어자 붙임!
  constructor(
    public name: string,
    protected age: number,
    private position?: string // 이렇게 매개변수에 선택적 프로퍼티도 설정 가능
  ) {}

  introduce() {
    console.log(`안녕하십니까 제 이름은 ${this.name}입니다.`); // 필드 접근 가능
    console.log(`나이는 ${this.age}이고 포지션은 ${this.position}입니다!`); // 필드 접근 가능
  }
}
