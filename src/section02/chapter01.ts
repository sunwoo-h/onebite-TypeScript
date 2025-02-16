/* 원시 타입 */
// 1. number 타입
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity; // Infinity도 number타입임
let num6: number = -Infinity;
let num7: number = NaN; // NaN(Not a Number)도 Number타입

// 2. string 타입
let str1: string = "hello";
let str2: string = "hello";
let srt3: string = `hello`; // 벡틱 가능
let str4: string = `bello ${str1}`;
let srt5: string = "hello 'sunwoo'"; // 파이썬처럼 사용가능
console.log(srt5); // 출력 결과 : hello 'sunwoo'

// 3. boolean 타입
let bool1: boolean = true;
let bool2: boolean = false;

// 4. null 타입
let null1: null = null;

// 5. undefined 타입
let unde1: undefined = undefined;

// 6. 리터럴(=값) 타입
let numA: 10 = 10; // number 리터럴 타입
let strA: "hello" = "hello"; // string 리터럴 타입
let boolA: true = true; // boolean 리터럴 타입
let boolB: false = false;
