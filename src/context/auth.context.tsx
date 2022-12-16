import { createContext, ReactNode, useContext } from "react";
import useAuth from "./auth.model";

type AuthManagerProps = {
  children: ReactNode;
};

type ContextType = {
  logout: () => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export const AuthManagerContext = createContext({} as ContextType);

const AuthManager = ({ children }: AuthManagerProps) => {
  const { isLogin, logout, setIsLogin } = useAuth();
  return (
    <AuthManagerContext.Provider
      value={{
        logout,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthManagerContext.Provider>
  );
};

export const useContextAuthManager = () => {
  return useContext(AuthManagerContext);
};

export default AuthManager;
