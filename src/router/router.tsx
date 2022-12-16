import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE } from "../common/constant/routes";
import { useContextAuthManager } from "../context/auth.context";
import Layout from "../layout/layout";
import Dashboard from "../pages/dashboard/dashboard.page";
import Login from "../pages/login/login.page";

const Router = () => {
  const { isLogin } = useContextAuthManager();
  return isLogin ? <PrivateRoute /> : <PublicRoute />;
};

const PrivateRoute = () => {
  return (
    <Routes>
      <Route
        path={ROUTE.DASHBOARD}
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route path={"*"} element={<Navigate to={ROUTE.DASHBOARD} replace />} />
    </Routes>
  );
};

const PublicRoute = () => {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path={"*"} element={<Navigate to={ROUTE.LOGIN} replace />} />
    </Routes>
  );
};

export default Router;
