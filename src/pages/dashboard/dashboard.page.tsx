import Button from "../../common/base-ui/button/button.component";
import DeleteModal from "./component/delete-modal.component";
import CreateModal from "./component/create-modal.component";
import EditModal from "./component/edit-modal.component";
import useViewModel from "./dashboard.model";

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
      {todoList.map((todo) => {
        return (
          <div key={todo.id} className="shadow-md rounded-xl relative mb-4">
            <div
              className="p-5 cursor-pointer"
              onClick={() => handleOpenEditModal(todo.id)}
            >
              <div className="text-2xl font-bold mb-4">{todo.title}</div>
              <div>{todo.description}</div>
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
      })}
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
