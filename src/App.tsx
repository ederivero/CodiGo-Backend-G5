import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import UserContextProvider from "./context/UserContext";
import { AdminView } from "./views/AdminView";
import { ProductosView } from "./views/ProductosView";
import { LoginView } from "./views/LoginView";
import { CrearProductoView } from "./views/CrearProductoView";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route element={<ProductosView />} path="" />
          <Route element={<LoginView />} path="login" />
          <Route
            path="crear-producto"
            element={<PrivateRoute children={<CrearProductoView />} />}
          />
          <Route
            path="admin"
            element={<PrivateRoute children={<AdminView />} />}
          />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
