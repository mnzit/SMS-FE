export interface Response<T = any> {
  [key: string]: any;
  success: boolean;
  resultDescription: string;
  data?: T
}
