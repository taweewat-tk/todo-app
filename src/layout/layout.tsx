import { Fragment, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <div>{children}</div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </Fragment>
  );
};
export default Layout;
