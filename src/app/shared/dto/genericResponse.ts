export interface GenericResponse<T> {
  status: boolean,
  resultDescription: string;
  data?: T;
}
