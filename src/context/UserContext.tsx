import { useState, createContext, useEffect } from "react";
import decode from "jwt-decode";

export const UserContext = createContext<{
  user?: string;
  setAuthUser?: (token: string) => void;
}>({});

const UserContextProvider = (props: any) => {
  const [user, setUser] = useState<string>();

  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    if (currentUser) {
      const { exp } = decode<{ exp: number }>(currentUser);
      if (+Date.now().toString().substring(0, 10) > exp) {
        localStorage.removeItem("user");
      } else {
        setUser(currentUser);
      }
    }
  }, []);

  const setAuthUser = (token: string) => {
    setUser(token);
  };

  return (
    <UserContext.Provider value={{ user, setAuthUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
