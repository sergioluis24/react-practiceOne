import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(true);

  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);

  const value = {
    isLogged,
    logIn,
    logOut,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("El contexto debe de llamarse dentro de un provider");

  return context;
}
