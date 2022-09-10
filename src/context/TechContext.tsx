import React, { createContext, useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "../data/api";
import { AuthContext, ITech } from "./AuthContext";

interface ITechContext{
  addTech: (data: IPlusTech) => Promise<void>
  removeTech(data: ITech): Promise<void>
}

export interface IPlusTech{
  title: string;
  status: string;
}

interface ITechProps{
  children: React.ReactNode;
}

export const TechContext = createContext({} as ITechContext);

const TechProvider = ({ children }: ITechProps) => {
  const {setUser} = useContext(AuthContext)
  
  const addTech: SubmitHandler<IPlusTech> = async (data) => {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      await api.post("/users/techs", data);
      const response = await api.get("/profile")
      setUser(response.data)
      api.defaults.headers.common.authorization = `Bearer ${token}`
    } catch (error) {
      console.error(error);
    }
  };

  const removeTech: SubmitHandler<ITech> = async (data) => {
    const token = localStorage.getItem("@KenzieHub:token");
    try {
      await api.delete(`/users/techs/${data.id}`);
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const response = await api.get("/profile")
      setUser(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider value={{ addTech, removeTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
