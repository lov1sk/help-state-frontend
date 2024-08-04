import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { RegisterUserRequest, User } from "../common/types";
import { jwtDecode, JwtPayload } from "jwt-decode";

type ReceiveJwtPayload = JwtPayload & {
  roles: string[];
};
type StorageToken = {
  token: string;
  payload: ReceiveJwtPayload;
};
type SignInProps = {
  email: string;
  password: string;
};

export type AuthContextType = {
  register: (props: RegisterUserRequest) => Promise<void>;
  signIn: (props: SignInProps) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};
export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [userToken, setUserToken] = useState<StorageToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token) as ReceiveJwtPayload;
      setUserToken({ token, payload: decodedToken });
      getUserProfile(token).then((result) => setCurrentUser(result));
    } else setUserToken(null);
  }, []);

  async function getUserProfile(token: string) {
    const { data } = await api.get(`/citizen/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  async function register(props: RegisterUserRequest) {
    const { data } = await api.post("/citizen/", props);
    console.log(data);
  }

  async function signIn({ email, password }: SignInProps) {
    // Mandamos as credenciais para o backend validar
    const { data } = await api.post("/citizen/auth", {
      email,
      password,
    });

    const token = data.access_token;
    //Se houver sucesso, o usuario é enviado para a tela inicial
    if (!token) {
      return alert("Error when auth");
    }

    //Salvar nos cookies o token e o user
    localStorage.setItem("token", token);
    const decodedToken = jwtDecode(token) as ReceiveJwtPayload;
    setUserToken({ token, payload: decodedToken });

    const userData = await getUserProfile(token);
    setCurrentUser(userData);
  }

  async function signOut() {
    //limpar localstorage
    localStorage.removeItem("token");
    setUserToken(null);
    setCurrentUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isAuthenticated: !!userToken,
        isAdmin: userToken?.payload.roles[0] === "STATE" ? true : false,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
