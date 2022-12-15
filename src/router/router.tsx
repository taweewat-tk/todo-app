import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE } from "../common/constant/routes";
import Dashboard from "../pages/dashboard/dashboard.page";
import Login from "../pages/login/login.page";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
      <Route path={"*"} element={<Navigate to={ROUTE.DASHBOARD} replace />} />
    </Routes>
  );
};
export default Router;
