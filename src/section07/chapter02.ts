/* map, forEach 메서드 타입 정의하기 */
// 제네릭을 더 잘 이해하기 위해 map과 foreach 메소드 직접 만들어보기!

// 1. map 메소드 타입 정의하기
// map 메소드를 제네릭을 이용해서 직접 함수로 만들어 보자

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  // 타입 변수를 2개를 지정해서 원본 배열 타입과 리턴 타입을 다르게 설정해줌!
  let result = []; // 빈 배열 만들어 놓고
  for (let i = 0; i < arr.length; i++) {
    // 입력으로 들어온 배열을 순회하며
    result.push(callback(arr[i])); // 입력으로 들어온 배열의 요소들에 콜백 함수를 실행한 값을 result 배열에 push함
  }
  return result; // push된 result 배열을 반환!
}

// 2. foreach 메소드 타입 정의하기
function forEach<T>(arr: T[], callback: (item: T) => void) {
  // foreach는 map과 다르게 반환하는 배열이 없어서 리턴타입이 void임.
  // 그래서 타입 변수도 T 하나만 필요함!
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
