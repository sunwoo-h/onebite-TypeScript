/* 함수 타입의 호환성 */
// 기준 1. 리턴값 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 가능
b = a; // error! : b의 타입이 더 좁기 때문에 a가 할당되지 못함

// 기준 2. 매개변수의 타입이 호환되는가?(반환값 타입과 반대!!!)
// (1) 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // error! : d가 입력받을 수 있는 건 10뿐인데 이걸 number 타입으로 확장 불가능함
d = c; // OK! 마치 다운캐스팅을 허용하는 것처럼 보임

// 객체로 봤을 때 이해가 더 쉬움(핸드북 참고)
// 결국은 함수에서 주안점은 1. 매개변수, 2. 리턴값임

// (2) 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // Ok. func1가 더 넓으니까 func2 포용 가능
func2 = func1; // error! : func1는 b도 매개변수로 받는데 a만 받게 해버리면 안됨
