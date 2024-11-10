export interface NoOffsetResponse<T> {
  results: T[];
  hasNext: boolean;
  before: string;
  next: string;
  size: number;
}