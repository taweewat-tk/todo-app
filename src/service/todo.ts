import dayjs from "dayjs";
import { map } from "rxjs";
import { API_URL } from "../common/constant/endpoint";
import BaseRxios from "./rxios";

type TodoResponse = {
  createdAt: string;
  description: string;
  title: string;
  updatedAt: string;
  user_id: string;
  _id: string;
};

type CreateTodoPayload = {
  title: string;
  description: string;
};

type UpdateTodoPayload = {
  title: string;
  description: string;
  id: string;
};

class TodoAPI {
  http: BaseRxios;

  constructor() {
    this.http = new BaseRxios({
      baseURL: API_URL,
    });
  }

  getAllTodoList = () => {
    return this.http.get<TodoResponse[]>("/todos").pipe(
      map((response) => {
        return response.map((item) => {
          return {
            createdAt: dayjs(item.createdAt).format("DD/MM/YYYY HH:mm"),
            description: item.description,
            title: item.title,
            updatedAt: item.updatedAt,
            userId: item.user_id,
            id: item._id,
          };
        });
      })
    );
  };

  getTodo = (id: string) => {
    return this.http.get<TodoResponse>(`/todos/${id}`).pipe(
      map((response) => {
        return {
          createdAt: dayjs(response.createdAt).format("DD/MM/YYYY HH:mm"),
          description: response.description,
          title: response.title,
          updatedAt: response.updatedAt,
          userId: response.user_id,
          id: response._id,
        };
      })
    );
  };

  createTodo = ({ title, description }: CreateTodoPayload) => {
    return this.http.post<TodoResponse>("/todos", { title, description }).pipe(
      map((response) => {
        return {
          createdAt: dayjs(response.createdAt).format("DD/MM/YYYY HH:mm"),
          description: response.description,
          title: response.title,
          updatedAt: response.updatedAt,
          userId: response.user_id,
          id: response._id,
        };
      })
    );
  };

  updateTodo = ({ id, title, description }: UpdateTodoPayload) => {
    return this.http
      .put<TodoResponse>(`/todos/${id}`, { title, description })
      .pipe(
        map((response) => {
          return {
            createdAt: dayjs(response.createdAt).format("DD/MM/YYYY HH:mm"),
            description: response.description,
            title: response.title,
            updatedAt: response.updatedAt,
            userId: response.user_id,
            id: response._id,
          };
        })
      );
  };

  deleteTodo = (id: string) => {
    return this.http.delete(`/todos/${id}`);
  };
}

export default TodoAPI;
