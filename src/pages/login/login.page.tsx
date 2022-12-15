import { useState } from "react";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import Input from "../../common/base-ui/fields/input.component";
import { ROUTE } from "../../common/constant/routes";
import User from "../../service/user.service";
import { setToken } from "../../utils/token";

type FormLoginProps = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const handleSubmit = (values: FormLoginProps) => {
    const user = new User();
    user.login(values.username, values.password).subscribe({
      next: (response) => {
        setToken(response.token);
        navigate(ROUTE.DASHBOARD);
      },
      error: (err) => {
        setErrorText(err.message);
      },
    });
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[400px]">
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
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
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
