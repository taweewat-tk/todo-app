import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FormProps } from "../../common/types/form.type";
import { Todo } from "../../common/types/todo.type";
import { useContextAuthManager } from "../../context/auth.context";
import TodoAPI from "../../service/todo";

const useViewModel = () => {
  const { logout } = useContextAuthManager();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectTodoId, setSelectTodoId] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<FormProps>({} as FormProps);
  const [isFinishLoad, setIsFinishLoad] = useState(false);

  useEffect(() => {
    const todoAPI = new TodoAPI();
    todoAPI.getAllTodoList().subscribe({
      next: (data) => {
        setTodoList(data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        setIsFinishLoad(true);
      },
    });
  }, []);

  const handleCreate = (values: FormProps) => {
    const payload = {
      title: values.title,
      description: values.description,
    };
    const todoAPI = new TodoAPI();
    todoAPI.createTodo(payload).subscribe({
      next: (data) => {
        setTodoList((prev) => [...prev, data]);
        setIsCreateModalOpen(false);
        toast.success("Todo created successfully.");
      },
      error: (err) => {
        console.error(err);
        toast.error("Todo created failed.");
      },
    });
  };

  const handleSelectTodo = (id: string) => {
    setSelectTodoId(id);
  };

  const handleOpenDeleteModal = (todo: Todo) => {
    handleSelectTodo(todo.id);
    setTodo({
      title: todo.title,
      description: todo.description,
    });
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    const todoAPI = new TodoAPI();
    todoAPI.deleteTodo(selectTodoId).subscribe({
      next: () => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== selectTodoId));
        setIsDeleteModalOpen(false);
        toast.success("Todo deleted successfully.");
      },
      error: (err) => {
        console.error(err);
        toast.error("Todo deleted failed.");
      },
    });
  };

  const handleOpenEditModal = (id: string) => {
    const todoAPI = new TodoAPI();
    setSelectTodoId(id);
    todoAPI.getTodo(id).subscribe({
      next: (data) => {
        setTodo({
          title: data.title,
          description: data.description,
        });
        setIsEditModalOpen(true);
      },
      error: (err) => {
        console.error(err);
      },
    });
  };

  const handleUpdate = (values: FormProps) => {
    const todoAPI = new TodoAPI();
    const payload = {
      id: selectTodoId,
      title: values.title,
      description: values.description ? values.description : "",
    };
    todoAPI.updateTodo(payload).subscribe({
      next: (data) => {
        setTodoList((prev) =>
          prev.map((todo) => {
            if (todo.id === selectTodoId) {
              return data;
            }
            return todo;
          })
        );
        setIsEditModalOpen(false);
        toast.success("Todo updated successfully.");
      },
      error: (err) => {
        console.error(err);
        toast.error("Todo updated failed.");
      },
    });
  };

  return {
    logout,
    setIsCreateModalOpen,
    todoList,
    handleOpenEditModal,
    handleOpenDeleteModal,
    isCreateModalOpen,
    handleCreate,
    todo,
    isEditModalOpen,
    setIsEditModalOpen,
    handleUpdate,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    handleDelete,
    isFinishLoad,
  };
};
export default useViewModel;
