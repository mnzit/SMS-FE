import { environment } from "src/environments/environment";

export class ApiConstants {

  static readonly BE_ENDPOINT = environment.BE_ENDPOINT;
  static readonly LOGIN = 'login';
  static readonly USERS = 'users';
  static readonly ROLES = 'roles';
  static readonly COURSES = 'courses';


  static readonly SAVE = 'save';
  static readonly UPDATE = 'update';

  static generatePath(...path: string[]) {
    return path.reduce((x, y) => `${x}/${y}`, this.BE_ENDPOINT);
  }

}
