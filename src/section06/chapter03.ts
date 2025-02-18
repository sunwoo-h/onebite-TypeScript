/* 인터페이스와 클래스 */

// implements : 구현하다
// class A implemets B : A '클래스'가 B '인터페이스'를 구현한다.
// 인터페이스를 '설계도'라고 생각.
// 그러면 '클래스가 설계도를 구현한다'고 직역하면됨.
// 이제부터 이 클래스가 생성하는 객체는 모두 이 인터페이스 타입을 만족하도록 클래스를 구현해야 함
// 살짝 사형선고 같은 느낌?
// 근데 잘 안씀

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
