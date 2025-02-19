/* 유틸리티 타입  */

// 타입스크립트가 자체적으로 제공하는 특수한 타입들

// 1. 맵드 타입 기반(이어서)
// 얘네는 타입변수 2개 씀.

// (4) Pick : 객체 타입에서 특정 프로퍼티만 골라냄
// T가 객체, K가 프로퍼티
type Pick<T, K extends keyof T> = {
  // extends로 K가 T의 키값을 상속받았다는 것을 작성해줘야 함(이유: 노션 참고)
  [key in K]: T[key];
};

// (5) Omit : 객체 타입에서 특정 프로퍼티만 뺌
// Pick에서 Exclude를 이용! 똑똑하네
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 얘도 extends로 K가 T의 키값을 상속받았다는 것을 작성해줘야 함

// (6) Record : 원래 있던 객체에 추가적인 프로퍼티 할당
type Record<K extends keyof any, V> = {
  // 얘도 extends로 받아줘야 함
  [key in K]: V;
};
