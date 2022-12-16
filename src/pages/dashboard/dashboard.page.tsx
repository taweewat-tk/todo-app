import Button from "../../common/base-ui/button/button.component";
import DeleteModal from "./component/delete-modal.component";
import CreateModal from "./component/create-modal.component";
import EditModal from "./component/edit-modal.component";
import useViewModel from "./dashboard.model";
import TodoList from "./component/todo-list.component";

const Dashboard = () => {
  const {
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
  } = useViewModel();

  return (
    <div className="container py-5">
      <div className="flex justify-end">
        <Button
          onClick={logout}
          type="button"
          className="bg-gray-500 hover:bg-gray-600"
        >
          Logout
        </Button>
      </div>
      <div className="text-center text-4xl font-bold mb-8 uppercase">
        Todo App
      </div>
      <div className="flex justify-center mb-4">
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          type="button"
          className="bg-blue-700 hover:bg-blue-800"
        >
          Create
        </Button>
      </div>
      {todoList.length > 0 ? (
        todoList.map((todo) => {
          return (
            <TodoList
              key={todo.id}
              todo={todo}
              handleOpenEditModal={handleOpenEditModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
            />
          );
        })
      ) : (
        <div className="text-center my-10 text-black/50">
          <div className="text-2xl">No todo !</div>
          <div className="text-lg">Please create to add new todo.</div>
        </div>
      )}
      <CreateModal
        isOpen={isCreateModalOpen}
        setIsOpen={setIsCreateModalOpen}
        handleCreate={handleCreate}
      />
      <EditModal
        initialValues={todo}
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        handleUpdate={handleUpdate}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        handleDelete={handleDelete}
        todoTitle={todo.title}
      />
    </div>
  );
};
export default Dashboard;
