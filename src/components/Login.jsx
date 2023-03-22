import React, { useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Boton } from "./Carrito";
import Banners from "../images/Banner.jpg";
import { ContextoProducto } from "../context/contextoProductos";
import db from "../firebase/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { usuario, setUsuario, setLogin } = useContext(ContextoProducto);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [correoIngresado, setCorreoIngresado] = useState([]);
  const [passwordIngresado, setPasswordIngresado] = useState([]);

  const navigate = useNavigate();

  //Llamada a base de datos y exportando Usuarios
  useEffect(() => {
    onSnapshot(collection(db, "usuarios"), (snap) => {
      const arregloUsuarios = snap.docs.map((objeto) => objeto.data());
      setListaUsuarios(arregloUsuarios);
    });
  }, []);

  const verificarLogin = async (e) => {
    e.preventDefault();
    //Filtramos los usuarios que coincidan con las credenciales ingresadas
    const Usuario = listaUsuarios.filter((usuario) => {
      if (
        usuario.email === correoIngresado &&
        usuario.password === passwordIngresado
      )
        return usuario.name;
    });

    //Seteamos el login
    if (Usuario[0]) {
      setUsuario(Usuario[0]);
      setLogin(true);
      navigate("/");
    } else {
      console.log("Usuario Incorrecto");
    }
  };

  return (
    <Contenedor>
      <Banner img>
        <img
          src={Banners}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Banner>
      <Banner>
        <div style={{ height: "12%", textAlign: "center" }}>
          <TituloForm>Inicia Sesión</TituloForm>
          <SubtituloForm>Entra a la comunidad de confianza</SubtituloForm>
        </div>

        <Form action="" onSubmit={verificarLogin}>
          <Div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su correo"
              value={correoIngresado}
              onChange={(e) => setCorreoIngresado(e.target.value)}
              required
            />
          </Div>

          <Div>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese su contraseña"
              value={passwordIngresado}
              onChange={(e) => setPasswordIngresado(e.target.value)}
              required
            />
          </Div>

          <Boton>Iniciar Sesion</Boton>
        </Form>
      </Banner>
    </Contenedor>
  );
};

const Form = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  overflow: hidden;
  gap: 15px;
  padding: 0 100px;

  @media screen and (max-width: 1000px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 750px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 630px) {
    padding: 0 10%;
  }
`;
const Banner = styled.div`
  width: 50%;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;

  ${(props) =>
    props.img &&
    css`
      width: 50%;
      background-color: black;
      padding: 0;

      @media screen and (max-width: 630px) {
        width: 100%;
        min-height: 20%;
      }
    `}

  @media screen and (max-width: 630px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #808080;
  padding: 10px;
`;

const Div = styled.div`
  height: 60px;

  ${(props) =>
    props.nombres &&
    css`
      display: flex;
      gap: 10px;
    `}
`;

const Contenedor = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 630px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    height: 100%;
  }
`;

const TituloForm = styled.p`
  font-size: 4vmin;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 750px) {
    font-size: 3.4vmin;
  }

  @media screen and (max-width: 630px) {
    font-size: 20px;
  }
`;

const SubtituloForm = styled.p`
  font-size: 2.5vmin;
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: 2vmin;
  }

  @media screen and (max-width: 630px) {
    font-size: 12px;
  }
`;

export {
  Login,
  Contenedor,
  Banner,
  Input,
  Form,
  Div,
  TituloForm,
  SubtituloForm,
};
