import { Form } from "react-final-form";
import Button from "../../common/base-ui/button/button.component";
import Input from "../../common/base-ui/fields/input.component";
import useViewModel from "./login.model";

const Login = () => {
  const { handleSubmit, errorText } = useViewModel();
  return (
    <div className="h-screen flex justify-center items-center container">
      <div className="w-[400px]">
        <div className="text-center text-4xl font-bold mb-8 uppercase">
          Todo App
        </div>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Input
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="username"
                  />
                </div>
                <div className="mb-6">
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="•••••••••"
                  />
                </div>
                {errorText && (
                  <div className="text-red-500 text-center mb-4">
                    {errorText}
                  </div>
                )}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800"
                  >
                    Login
                  </Button>
                </div>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};
export default Login;
