import { map } from "rxjs";
import { API_URL } from "../common/constant/endpoint";
import BaseRxios from "./rxios";

type LoginResponse = {
  token: string;
};

type LoginPayload = {
  username: string;
  password: string;
};

class UserAPI {
  http: BaseRxios;

  constructor() {
    this.http = new BaseRxios({
      baseURL: API_URL,
    });
  }

  login = ({ username, password }: LoginPayload) => {
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
export default UserAPI;
