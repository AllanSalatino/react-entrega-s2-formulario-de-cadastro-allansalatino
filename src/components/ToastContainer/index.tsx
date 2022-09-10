import React, { SetStateAction } from "react";
import { useContext } from "react";
import { AuthContext, IFormLogin, IFormRegister, IUser } from "../../context/AuthContext";
import Toast from "../Toast";
import { Container } from "./style";

const ToastContainer = () => {
  const { isToastVisible, setIsToastVisible, identifyToast } =
    useContext(AuthContext);
  return (
    <Container>
      {isToastVisible && (
        <Toast
          message={{
            success: {
              title: `${identifyToast} realizado com sucesso!`,
              description: `Você foi redirecionado para o ${identifyToast === "Cadastro" ? "Login" : "Dashboard"}`,
            },
            error: {
              title: `Não foi possivel realizar o ${identifyToast}`,
              description: `Verifique os dados solicitados`,
            },
          }}
          setIsToastVisible={setIsToastVisible} user={null} setUser={function (value: SetStateAction<IUser | null>): void {
            throw new Error("Function not implemented.");
          } } isVisible={false} handleVisibilit={function (): void {
            throw new Error("Function not implemented.");
          } } signIn={function (data: IFormLogin): Promise<void> {
            throw new Error("Function not implemented.");
          } } loading={false} isToastVisible={false} isSuccess={false} setIsSuccess={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          } } identifyToast={""} setIdentifyToast={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          } } onSubmit={function (data: IFormRegister): Promise<void> {
            throw new Error("Function not implemented.");
          } }        />
      )}
    </Container>
  );
};

export default ToastContainer;
