/* 인덱스드 엑세스 타입 */
// '특정 프로퍼티'의 '타입'을 추출하는 것

// 1 객체 프로퍼티의 타입 추출
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "황선우",
  },
};

function printAuthorInfo(author: Post["author"]) {
  // 인덱스드 엑세스, 인덱스에는 값이 아닌 타입만 들어갈 수 있음!
  // 지금 이렇게 해두면 매개변수 author의 타입은 author 객체가 됨!
  console.log(`${author.id}- ${author.name}`);
}

printAuthorInfo(post.author);

// 2. 배열 요소의 타입 추출하기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  // 배열은 인덱스로 number 또는 number literal 사용!
  // -> literal값 넣어도 number타입으로 인식함
  console.log(`${author.id}- ${author.name}`);
}

// 3. 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

// 튜플은 인덱스에 number 넣으면 튜플을 배열로 인식해 최적의 공통 타입 추출!
type Tup3 = Tup[number];
// number | string | boolean -> union 타입 추출!
