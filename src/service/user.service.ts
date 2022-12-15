import { map } from "rxjs";
import { API_URL } from "../common/constant/endpoint";
import BaseRxios from "./rxios";

type LoginResponse = {
  token: string;
};

class User {
  http: BaseRxios;

  constructor() {
    this.http = new BaseRxios({
      baseURL: API_URL,
    });
  }

  login = (username: string, password: string) => {
    return this.http
      .post<LoginResponse>("/users/auth", { username, password })
      .pipe(
        map((response) => {
          return {
            token: response.token,
          };
        })
      );
  };
}
export default User;
