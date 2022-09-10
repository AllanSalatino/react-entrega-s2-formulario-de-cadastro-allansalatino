import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { api } from "../data/api";
import React from "react";
import { SubmitHandler } from "react-hook-form";

export interface IFormRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module?: string;
}

export interface IFormLogin{
  email: string;
  password: string;
}

interface IChildrenContext {
  children: React.ReactNode;
}

export interface IUser{
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: ITech[];
  works: [];
  avatar_url: string | null;
}

export interface ITech{
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isVisible: boolean;
  handleVisibilit: () => void;
  signIn: (data: IFormLogin) => Promise<void>;
  loading: boolean;
  isToastVisible: boolean;
  setIsToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  identifyToast: string;
  setIdentifyToast: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (data: IFormRegister) => Promise<void>;
  message?: IMessageContext;
}

export interface IMessage{
  title: string;
  description: string;
}

export interface IMessageContext{
  success: IMessage;
  error: IMessage;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IChildrenContext) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [identifyToast, setIdentifyToast] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();
  const location: any = useLocation();

  const handleVisibilit = () => {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const signIn: SubmitHandler<IFormLogin> = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem("@KenzieHub:token", token);

      const toNavigate = location?.state?.from?.pathname || "/dashboard";

      navigate(toNavigate, { replace: true });
      setIsToastVisible(true);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsToastVisible(true);
      setIsSuccess(false);
    }
    setIdentifyToast("Login");
  };

  const onSubmit: SubmitHandler<IFormRegister> = async (data) => {
    try {
      await api.post("/users", data);
      navigate("/", { replace: true });
      setIsToastVisible(true);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsToastVisible(true);
      setIsSuccess(false);
    }
    setIdentifyToast("Cadastro");
  };

  return (
    <AuthContext.Provider
      value={{
        isVisible,
        handleVisibilit,
        user,
        setUser,
        signIn,
        loading,
        isToastVisible,
        setIsToastVisible,
        isSuccess,
        setIsSuccess,
        setIdentifyToast,
        identifyToast,
        onSubmit
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
