import logo from "../../assets/Logo.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, Form, Header, Main, Title } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../styles/Input";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext, IFormLogin } from "../../context/AuthContext";

export const Login = () => {
  const {isVisible, handleVisibilit, signIn} = useContext(AuthContext)
  
  const Schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Digite um email valido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(Schema),
  });

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logotipo" />
      </Header>
      <Main>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(signIn)}>
          <div>
            <>
              <h3>Email</h3>
              <Input
                type="text"
                placeholder="Digite seu email aqui"
                required
                {...register("email")}
              />
              {errors.email?.message}
            </>
          </div>
          <div>
            <>
              <h3>Senha</h3>
              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Digite sua senha aqui"
                required
                {...register("password")}
              />
              {errors.password?.message}
            </>
            <button type="button" onClick={() => handleVisibilit()}>
              {isVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>
          <button type="submit">Entrar</button>
          <div>
            <p>Ainda não possui uma conta?</p>
            <nav>
              <Link className="buttonRegister" to="/registration">
                Cadastre-se
              </Link>
            </nav>
          </div>
        </Form>
      </Main>
    </Container>
  );
};
