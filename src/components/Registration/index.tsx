import logo from "../../assets/Logo.png";
import { Container, Form, Header, Main, Title } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Input } from "../../styles/Input";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, IFormRegister } from "../../context/AuthContext";
import { Schema } from "../validators/RegisterUser";

export const Registration = () => {
  const { onSubmit } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(Schema),
  });

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logotipo" />
        <nav>
          <Link className="buttonBack" to="/">
            Voltar
          </Link>
        </nav>
      </Header>
      <Main>
        <div>
          <Title>Crie sua conta</Title>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <h3>Nome</h3>
              <Input
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
                required
              />
              {errors.name?.message}
            </div>
            <div>
              <h3>Email</h3>
              <Input
                type="text"
                placeholder="Digite aqui seu email"
                {...register("email")}
                required
              />
              {errors.email?.message}
            </div>
            <div>
              <h3>Senha</h3>
              <Input
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
                required
                minLength={8}
              />
              {errors.password?.message}
            </div>
            <div>
              <h3>Confirmar senha</h3>
              <Input
                type="password"
                placeholder="Confirme sua senha"
                {...register("confirmPassword")}
                required
                minLength={8}
              />
              {errors.confirmPassword?.message}
            </div>
            <div>
              <h3>Bio</h3>
              <Input
                type="text"
                placeholder="Fale sobre você"
                {...register("bio")}
                required
              />
              {errors.bio?.message}
            </div>
            <div>
              <h3>Contato</h3>
              <Input
                type="number"
                placeholder="Opção de contato"
                {...register("contact")}
                required
              />
              {errors.contact?.message}
            </div>
            <div>
              <h3>Selecionar módulo</h3>
              <select {...register("course_module")} required>
                <option value="Primeiro módulo">Primeiro módulo</option>
                <option value="Segundo módulo">Segundo módul</option>
                <option value="Terceiro módulo">Terceiro módulo</option>
                <option value="Quarto módulo">Quarto módulo</option>
                <option value="Quinto módulo">Quinto módulo</option>
                <option value="Sexto módulo">Sexto módulo</option>
              </select>
              {errors.course_module?.message}
            </div>
          </div>
          <button type="submit">Cadastrar</button>
        </Form>
      </Main>
    </Container>
  );
};
