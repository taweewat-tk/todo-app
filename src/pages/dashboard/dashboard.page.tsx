import { useState } from "react";
import Button from "../../common/base-ui/button/button.component";
import DeleteModal from "./component/delete-modal.component";
import { FormProps } from "../../common/types/form";
import CreateModal from "./component/create-modal.component copy";
import EditModal from "./component/edit-modal.component";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../common/constant/routes";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleCreate = (values: FormProps) => {
    console.log("create", values);
    setIsCreateModalOpen(false);
  };

  const handleDelete = () => {
    console.log("delete");
    setIsDeleteModalOpen(false);
  };

  const handleUpdate = () => {
    console.log("edit");
  };

  return (
    <div className="container mx-auto">
      <Button
        onClick={() => setIsCreateModalOpen(true)}
        type="button"
        className="bg-blue-700 hover:bg-blue-800"
      >
        Create
      </Button>
      <Button
        onClick={() => navigate(ROUTE.LOGIN)}
        type="button"
        className="bg-gray-500 hover:bg-gray-600"
      >
        Logout
      </Button>
      <div className="mb-4 uppercase text-center text-2xl">Todo</div>
      <div className="border border-gray-500 relative">
        <div onClick={() => setIsEditModalOpen(true)}>
          <div>TODO Title</div>
          <div>TODO Description</div>
          <div>TODO DD/MM/YYYY</div>
        </div>
        <Button
          onClick={() => setIsDeleteModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 z-10 absolute right-0 top-0"
          type="button"
        >
          Delete
        </Button>
      </div>
      <CreateModal
        isOpen={isCreateModalOpen}
        setIsOpen={setIsCreateModalOpen}
        handleCreate={handleCreate}
      />
      <EditModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        handleUpdate={handleUpdate}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default Dashboard;
