/* 템플릿 리터럴 타입 */

// 1. 일반적인 리터럴 타입 정의 방법
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `red-dog` | "red-cat" | "red-chicken" | "black-dog";

// 2. 템플릿 리터럴 타입 사용
type ColoredAnimal2 = `${Color}-${Animal}`;
