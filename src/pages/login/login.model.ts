import { useState } from "react";
import { useContextAuthManager } from "../../context/auth.context";
import UserAPI from "../../service/user";
import { setToken } from "../../utils/token";

type FormLoginProps = {
  username: string;
  password: string;
};

const useViewModel = () => {
  const { setIsLogin } = useContextAuthManager();
  const [errorText, setErrorText] = useState("");
  const handleSubmit = (values: FormLoginProps) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    const userAPI = new UserAPI();
    userAPI.login(payload).subscribe({
      next: (response) => {
        setToken(response.token);
        setIsLogin(true);
      },
      error: (err) => {
        setErrorText(err.message);
      },
    });
  };

  return { handleSubmit, errorText };
};
export default useViewModel;
