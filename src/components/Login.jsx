import React from "react";
import styled, { css } from "styled-components";
import { Boton } from "./Carrito";
import Banners from "../images/Banner.jpg";

const Login = ({ logueado }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return logueado ? (
    <Contenedor>
      <Banner img>
        <img
          src={Banners}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Banner>
      <Banner>
        <div style={{ height: "12%", textAlign: 'center' }}>
          <h2>Inicia Sesión</h2>
          <p>Entra a la comunidad de confianza</p>
        </div>
        <Form action="" onSubmit={onSubmit}>
          <Div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su correo"
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
              required
            />
          </Div>

          <Boton type="submit" inicioSesion>
            Submit
          </Boton>
        </Form>
      </Banner>
    </Contenedor>
  ) : (
    <Contenedor>
      <Banner img>
        <img
          src={Banners}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Banner>
      <Banner>
        <div style={{ height: "12%" }}>
          <h2>Bienvenido a Footlocker 👋</h2>
          <p>Necesitamos unos datos básicos para empezar</p>
        </div>
        <Form action="" onSubmit={onSubmit}>
          <Div nombres>
            <div>
              <label htmlFor="name">Nombre</label>
              <Input
                type="text"
                name="name"
                placeholder="Ingrese su Nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name">Apellido</label>
              <Input
                type="text"
                name="last-name"
                placeholder="Ingrese su Apellido"
                required
              />
            </div>
          </Div>
          <Div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su correo"
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
              required
            />
          </Div>

          <Div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirme su contraseña"
              required
            />
          </Div>
          <Boton type="submit" inicioSesion>
            Submit
          </Boton>
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
`;
const Banner = styled.div`
  width: 50%;
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px;

  ${(props) =>
    props.img &&
    css`
      width: 50%;
      background-color: blue;
      padding: 0;
    `}
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
`;

export default Login;
