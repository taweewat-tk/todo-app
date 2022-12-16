import { useEffect, useState } from "react";
import { getToken, removeToken } from "../utils/token";
const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const logout = () => {
    removeToken();
    setIsLogin(false);
  };

  return {
    isLogin,
    logout,
    setIsLogin,
  };
};
export default useAuth;
