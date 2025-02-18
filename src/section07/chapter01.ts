/* 타입 변수 응용하기 */

// 경우 1. 2개의 타입변수가 필요한 경우
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

// 경우 2. 다양한 배열 타입을 인수로 받는 경우
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // num의 타입 : number

let str = returnFirstValue([1, "hello", "mynameis"]); // str 타입 :number | string
// 첫 번째 요소를 리턴값으로 설정해서 number타입이 되어야 될 것 같지만, 아님!!
// 인자로 받은 값이 string | number 타입이기 때문에 리턴도 string | number로 됨!

// 경우 3. 위의 경우에서 배열의 첫 번쨰 요소의 타입이 리턴되도록 하려면?
// 타입을 미리 지정해주는 '튜플'과 '나머지 파라미터'를 사용하면 됨
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValue2([1, "hello", "mynameis"]); // 이렇게 해줘야 비로소 첫 번째 요소의 타입인 number을 리턴!

// 경우 4. 타입 변수를 제한하는 사례
// 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 둠
// extends 사용!

function getLength<T extends { length: number }>(data: T) {
  // 타입변수를 length 프로퍼티를 갖는 객체타입으로 제한한다는 의미!
  return data.length;
}

getLength("123"); // OK

getLength([1, 2, 3]); // OK

getLength({ length: 1 }); // OK

getLength(undefined); // error! : undefined는 length 프로퍼티가 없음

getLength(null); // error! : null도 length 프로퍼티 없음!
