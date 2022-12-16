import Button from "../../../common/base-ui/button/button.component";
import { Todo } from "../../../common/types/todo.type";

type TodoListProps = {
  todo: Todo;
  handleOpenEditModal: (id: string) => void;
  handleOpenDeleteModal: (todo: Todo) => void;
};

const TodoList = ({
  todo,
  handleOpenEditModal,
  handleOpenDeleteModal,
}: TodoListProps) => {
  return (
    <div className="shadow-md rounded-xl relative mb-4">
      <div
        className="p-5 cursor-pointer"
        onClick={() => handleOpenEditModal(todo.id)}
      >
        <div className="text-2xl font-bold mb-4 truncate w-[148px] md:w-[500px] lg:w-[800px]">
          {todo.title}
        </div>
        <div className="mb-4">{todo.description}</div>
        <div className="text-black/50">{todo.createdAt}</div>
      </div>
      <Button
        onClick={() => handleOpenDeleteModal(todo)}
        className="bg-red-600 hover:bg-red-700 z-10 absolute right-5 top-5"
        type="button"
      >
        Delete
      </Button>
    </div>
  );
};
export default TodoList;
