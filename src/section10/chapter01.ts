/* 유틸리티 타입  */

// 타입스크립트가 자체적으로 제공하는 특수한 타입들

// 1. 맵드 타입 기반
// (1) Partial : 모든 프로퍼티를 선택적 프로퍼티로 변환
type Partial<T> = {
  [key in keyof T]?: T[key];
};

// (2) Required : 모든 프로퍼티를 필수 프로퍼티로 변환
type Required<T> = {
  [key in keyof T]-?: T[key]; // -? 붙이면 필수로 써야됨
};

// (3) Readonly : 모든 프로퍼티를 수정 불가능하게 변경
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
