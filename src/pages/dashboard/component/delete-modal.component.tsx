import Button from "../../../common/base-ui/button/button.component";
import Modal from "../../../common/base-ui/modal/modal.component";

type DeleteModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleDelete: () => void;
  todoTitle: string;
};

const DeleteModal = ({
  isOpen,
  setIsOpen,
  handleDelete,
  todoTitle,
}: DeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="text-center mb-4 text-lg font-medium leading-6 text-gray-900">
        Delete {todoTitle} ?
      </div>
      <div className="flex justify-center">
        <Button
          type="button"
          className="mr-3 bg-gray-500 hover:bg-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          className="bg-blue-700 hover:bg-blue-800"
          type="button"
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};
export default DeleteModal;
