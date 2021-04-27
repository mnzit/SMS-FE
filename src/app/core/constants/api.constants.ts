import { environment } from "src/environments/environment";

export class ApiConstants {

  static readonly BE_ENDPOINT = environment.BE_ENDPOINT;
  static readonly LOGIN = 'login';
  static readonly USERS = 'users';

  static generatePath(...path: string[]) {
    return path.reduce((x, y) => `${x}/${y}`, this.BE_ENDPOINT);
  }

}
