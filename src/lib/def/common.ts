export interface NoOffsetResponseWrapper<T> {
  results: T[];
  hasNext: boolean;
  before: string;
  next: string;
  size: number;
}

export interface ResponseWrapper<T> {
  result: T;
}

export type Img = {
  width: number;
  height: number;
  path: string;
}