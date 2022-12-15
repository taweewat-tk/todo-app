import { API_URL } from "../common/constant/endpoint";
import BaseRxios from "./rxios";

class Todo {
  http: BaseRxios;

  constructor() {
    this.http = new BaseRxios({
      baseURL: API_URL,
    });
  }

  getAllTodoList = () => {
    return this.http.get("/todos");
  };

  getTodo = (id: string) => {
    return this.http.get(`/todos/${id}`);
  };

  createTodo = (title: string, description: string) => {
    return this.http.post("/todos", { title, description });
  };

  updateTodo = (id: string, title: string, description: string) => {
    return this.http.put(`/todos/${id}`, { title, description });
  };

  deleteTodo = (id: string) => {
    return this.http.delete(`/todos/${id}`);
  };
}

export default Todo;
