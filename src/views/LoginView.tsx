import React, { useContext, useState } from "react";
import { login } from "../services/usuario.service";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const LoginView = () => {
  const { user, setAuthUser } = useContext(UserContext);

  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await login({ correo, password });

    if (data.status === 200) {
      if (setAuthUser) {
        localStorage.setItem("user", data.data.token);
        setAuthUser(data.data.token);
      }
      navigate("/admin");
    }
  };
  return user ? (
    <Navigate to={"/admin"} />
  ) : (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          id="email"
          value={correo}
          onChange={(e) => setCorreo(e.currentTarget.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button>Iniciar sesion</button>
      </form>
    </div>
  );
};
