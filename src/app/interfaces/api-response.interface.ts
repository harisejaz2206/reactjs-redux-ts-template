export interface IResponseInterface<T = any> {
  statusCode: number;
  status: boolean;
  message: string;
  payload?: T;
}
