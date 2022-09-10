import React, { useContext } from "react";
import { Input } from "../../../styles/Input";
import { Container, Header, Label, Main } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthContext"
import { IPlusTech, TechContext } from "../../../context/TechContext";

export default function ModalPlusTech () {
  const {addTech} = useContext(TechContext)

  const {handleVisibilit} = useContext(AuthContext)

  const Schema = yup.object().shape({
    title: yup.string().required(),
    status: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPlusTech>({
    resolver: yupResolver(Schema),
  });
  
  return (
    <Container>
      <Label>
        <Header>
          <h1>Cadastrar tecnologia</h1>
          <button onClick={() => handleVisibilit()}>x</button>
        </Header>
        <Main>
          <form onSubmit={handleSubmit(addTech)}>
            <div>
              <>
                <h3>Nome</h3>
                <Input type="text" placeholder="Digite a tecnologia aqui" required {...register("title")}/>
                {errors.title?.message}
              </>
            </div>
            <div>
              <h3>Selecionar status</h3>
              <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediario</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <button type="submit">Cadastrar tecnologia</button>
          </form>
        </Main>
      </Label>
    </Container>
  );
}
