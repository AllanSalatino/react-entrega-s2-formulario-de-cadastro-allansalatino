import { Container, Header, Main } from "./style";
import logo from "../../assets/Logo.png";
import { Link, Navigate } from "react-router-dom";
import { ImPlus } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TechList } from "./TechList";
import LabelPlusTech from "./ModalPlusTech";
import React from "react";

export const Dashboard = () => {
  const { user, isVisible, handleVisibilit, loading } = useContext(AuthContext);

  if (loading) {
    return <h1 style={{ color: "#000" }}>Carregando...</h1>;
  }
  return (
    <Container>
      {isVisible && <LabelPlusTech />}
      {user ? (
        <>
          <Header>
            <img src={logo} alt="Logotipo" />
            <nav>
              <Link to="/">Sair</Link>
            </nav>
          </Header>
          <Main>
            <div>
              <h1>Olá, {user.name}</h1>
              <p>
                {user.course_module} ({user.bio})
              </p>
            </div>
            <section>
              <div>
                <h3>Tecnologias</h3>
                <button onClick={() => handleVisibilit()}>
                  <ImPlus className="iconPlus" />
                </button>
              </div>
            </section>
            <TechList />
          </Main>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </Container>
  );
};
