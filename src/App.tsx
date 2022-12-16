import { BrowserRouter } from "react-router-dom";
import AuthManager from "./context/auth.context";
import Router from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <AuthManager>
        <Router />
      </AuthManager>
    </BrowserRouter>
  );
}

export default App;
