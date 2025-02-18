/* 프로미스와 제네릭 */

// 1. TS에서 Promise 사용하기
// JS와 다른 TS의 프로미스 사용법 : 타입 변수 지정해줘야 함
const promise = new Promise<number>((resolve, reject) => {
  // Promise 뒤에 제내릭으로 number 타입 선언! -> resolve의 타입은 number이 됨
  setTimeout(() => {
    // 결과값 : 20
    resolve(20); // 3초뒤 resolve 호출해서 20을 response에 전달
  }, 3000);
});

promise.then((response) => {
  // response는 number 타입
  console.log(response); // 20 출력
});

promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

// 2. 함수의 리턴값으로 Promise 사용

interface Post {
  id: number;
  title: string;
  content: string;
}

// (1) Promise 객체 생성시 제네릭 타입 설정하기
function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    // 객체를 생성할 때 Post로 선언해버림
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
}

// (2) 함수의 리턴값을 직접 명시(추천하는 방법 -> 가독성 더 좋음)
function fetchPost2(): Promise<Post> {
  // 함수의 리턴값으로 Promise<Post> 써줌
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
}
