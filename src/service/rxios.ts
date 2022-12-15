import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Observable } from "rxjs";
import { getToken } from "../utils/token";

type BaseObject = Record<string, unknown>;

type RxiosConfig = AxiosRequestConfig;

enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface ResponseError extends Error {
  response: {
    data: BaseObject;
  };
}

class BaseRxios {
  private httpClient: AxiosInstance;

  constructor(config: RxiosConfig) {
    this.httpClient = axios.create(config);
  }

  private observable<T>(config: RxiosConfig) {
    const token = getToken();
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    const req = this.httpClient.request<T>(config);

    return new Observable<T>((observer) => {
      req
        .then((res) => {
          observer.next(res.data);
          observer.complete();
        })
        .catch((err: ResponseError) => {
          observer.error(err.response.data);
        })
        .finally(() => {
          observer.complete();
        });
    });
  }

  public get<T>(url: string, config?: RxiosConfig) {
    return this.observable<T>({
      method: HttpMethod.GET,
      url,
      ...config,
    });
  }

  public post<T>(url: string, payload?: BaseObject, config?: RxiosConfig) {
    return this.observable<T>({
      method: HttpMethod.POST,
      url,
      data: payload,
      ...config,
    });
  }

  public put<T>(url: string, payload?: BaseObject, config?: RxiosConfig) {
    return this.observable<T>({
      method: HttpMethod.PUT,
      url,
      data: payload,
      ...config,
    });
  }

  public delete<T>(url: string, config?: RxiosConfig) {
    return this.observable<T>({
      method: HttpMethod.DELETE,
      url,
      ...config,
    });
  }
}

export default BaseRxios;
