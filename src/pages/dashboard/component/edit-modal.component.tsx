import { Form } from "react-final-form";
import Button from "../../../common/base-ui/button/button.component";
import Input from "../../../common/base-ui/fields/input.component";
import Textarea from "../../../common/base-ui/fields/textarea.component";
import Modal from "../../../common/base-ui/modal/modal.component";
import { FormProps } from "../../../common/types/form";

type EditModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleUpdate: (values: FormProps) => void;
};

const EditModal = ({ isOpen, setIsOpen, handleUpdate }: EditModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="text-center mb-4 text-lg font-medium leading-6 text-gray-900">
        Edit
      </div>
      <Form
        onSubmit={handleUpdate}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input name="title" label="Title" type="text" />
              </div>
              <div className="mb-4">
                <Textarea name="description" label="Description" rows={8} />
              </div>
              <div className="flex justify-end">
                <Button
                  type="button"
                  className="mr-3 bg-gray-500 hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-blue-700 hover:bg-blue-800" type="submit">
                  Create
                </Button>
              </div>
            </form>
          );
        }}
      />
    </Modal>
  );
};
export default EditModal;
