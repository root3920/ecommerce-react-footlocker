import React, { useContext } from "react";
import "animate.css";
import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Boton } from "./Carrito";
import { Contenedor } from "./Header";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { H3, Enlace } from "./Footer";
import { NavLink } from "react-router-dom";
import { ContextoProducto } from "../context/contextoProductos";
import { BsPersonCircle } from "react-icons/bs";

const Modal = ({ abrirModal, setAbrirModal }) => {
  const { login, usuario, setLogin } = useContext(ContextoProducto);
  console.log(usuario);
  if (!abrirModal) {
    return null;
  }
  return login ? (
    //Modal cuando el Usuario esta logueado
    <ContenedorModal className="animate__animated animate__fadeIn">
      <Box>
        <div style={{ padding: "0 30px" }}>
          <AiOutlineClose
            onClick={() => setAbrirModal(false)}
            size={20}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "10",
              right: "30",
            }}
          />
          <P bienvenida>Que bueno verte otra vez💛 </P>

          <ContenedorFicha>
            <div>
              <P>{usuario.fullName}</P>
              <P correo>{usuario.email}</P>
            </div>
            <BsPersonCircle size={"5.5vmin"} style={{ margin: "15px" }} />
          </ContenedorFicha>
          <Boton
            onClick={() => {
              setAbrirModal(false);
              setLogin(false);
            }}
            inicioSesion
          >
            Cerrar Sesión
          </Boton>
        </div>
        <hr style={{ margin: "0 30px" }}></hr>
        <Contenedor inicioSesion>
          <a
            href="https://github.com/root3920"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub color="black" size={20} style={{ cursor: "pointer" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/federico-alarc%C3%B3n-3672a3200/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin color="black" size={20} style={{ cursor: "pointer" }} />
          </a>
          <Enlace
            href="https://drive.google.com/file/d/1VLD6BqjJsLwfqp4_yYAFmHgYMsPbTRbS/view?usp=share_link"
            target="_blank"
          >
            <H3 color={true}>CV</H3>
          </Enlace>
        </Contenedor>
      </Box>
    </ContenedorModal>
  ) : (
    //Modal cuando el Usuario esta deslogueado
    <ContenedorModal className="animate__animated animate__fadeIn">
      <Box>
        <div style={{ padding: "0 30px" }}>
          <AiOutlineClose
            onClick={() => setAbrirModal(false)}
            size={20}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "10",
              right: "30",
            }}
          />
          <P noLogin>Bienvenido a Footlocker 👋</P>
          <Boton
            as={NavLink}
            to="/register"
            onClick={() => {
              setAbrirModal(false);
            }}
            inicioSesion
          >
            Crear Cuenta
          </Boton>
          <SubTitulo>
            ¿Tienes cuenta?
            <NavLink
              to="/login"
              onClick={() => {
                setAbrirModal(false);
              }}
            >
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "#0694e0",
                  textDecoration: "underline",
                  margin: "0 3px",
                  cursor: "pointer",
                  fontSize: "2.5vmin",
                }}
              >
                Iniciar Sesión
              </button>
            </NavLink>
          </SubTitulo>
        </div>
        <hr style={{ margin: "0 30px" }}></hr>
        <Contenedor inicioSesion>
          <a
            href="https://github.com/root3920"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub color="black" size={20} style={{ cursor: "pointer" }} />
          </a>

          <a
            href="https://www.linkedin.com/in/federico-alarc%C3%B3n-3672a3200/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin color="black" size={20} style={{ cursor: "pointer" }} />
          </a>
          <Enlace
            href="https://drive.google.com/file/d/1VLD6BqjJsLwfqp4_yYAFmHgYMsPbTRbS/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <H3 color={true}>CV</H3>
          </Enlace>
        </Contenedor>
      </Box>
    </ContenedorModal>
  );
};

const ContenedorModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  z-index: 25;
  animation-duration: 0.2s;
`;

const Box = styled.div`
  min-width: 25%;
  max-height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin-right: 20px;
  position: static;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const P = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 4vmin;
  font-weight: 600;

  ${(props) =>
    props.bienvenida &&
    css`
      display: flex;
      font-size: 2.5vmin;
      gap: 10px;
      padding-top: 30px;
      color: gray;
      font-weight: 500;
    `}
  ${(props) =>
    props.correo &&
    css`
      display: flex;
      font-size: 12px;
      color: gray;
      gap: 10px;
      margin-top: -5px;
      font-weight: 300;
    `}

    ${(props) =>
    props.noLogin &&
    css`
      padding-top: 30px;
      padding-bottom: 70px;
    `}
`;

const SubTitulo = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 2.5vmin;
  font-weight: 400;
  padding: 10px 0;
`;

const ContenedorFicha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 70px;
`;

export default Modal;
