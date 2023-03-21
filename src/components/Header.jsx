import styled, { css } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/carritoIcon.css";
import React, { useContext, useState } from "react";
import { ContextoProducto } from "../context/contextoProductos";
import { BsPersonCircle } from "react-icons/bs";

const Header = ({ setBuscando, setBusqueda, setAbrirModal }) => {
  const [input, setInput] = useState("");

  //funcion para enviar formulario de busqueda
  const onSubmit = (e) => {
    e.preventDefault();
    setBuscando(false);
    setBusqueda(input);
    setInput("");
  };

  const { estadoCarrito, numItems } = useContext(ContextoProducto);

  return (
    <Head>
      <Contenedor>
        <NavLink to="/" onClick={() => setBuscando(true)}>
          <Image
            src="https://www.footlocker.com/built/257/images/FL/logo.svg"
            alt="logo"
          />
        </NavLink>
      </Contenedor>

      <Contenedor logos>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Search"
            name="buscador"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Boton>
            <FaSearch color="black" size={20} style={{ cursor: "pointer" }} />
          </Boton>
        </Form>

        <div
          style={{
            position: "static",
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <div className={numItems > 0 ? "carrito_lleno" : ""}>{numItems}</div>
          <NavLink to="/carrito" onClick={() => setBuscando(true)}>
            {estadoCarrito}
          </NavLink>
        </div>
        <BsPersonCircle
          color="white"
          size={23}
          style={{ cursor: "pointer" }}
          onClick={() => setAbrirModal(true)}
        />
      </Contenedor>
    </Head>
  );
};

const Head = styled.div`
  height: 12vh;
  width: 100%;
  display: flex;
  padding: 0 30px;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
`;

const Image = styled.img`
  height: 40%;
  width: 100%;
  object-fit: contain;
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 20%;
  justify-content: flex-start;

  ${(props) =>
    props.logos &&
    css`
      gap: 30px;
      width: 70%;
      height: 100%;
      justify-content: flex-end;
    `}

  ${(props) =>
    props.inicioSesion &&
    css`
      width: 100%;
      height: auto;
      justify-content: center;
      gap: 30px;
      padding-bottom: 50px;
    `}
`;

const Input = styled.input`
  width: 150px;
  height: 38px;
  outline: none;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 10px;
  transition: all 0.3s;
  font-size: 16px;

  &:focus {
    width: 500px;
  }

  @media screen and (max-width: 895px) {
    &:focus {
      width: 200px;
    }
  }

  @media screen and (max-width: 475px) {
    width: 50px;
    height: 33px;
    &:focus {
      width: 90px;
    }
  }
`;

const Form = styled.form`
  display: flex;
`;

const Boton = styled.button`
  height: 38px;
  margin: 0;
  outline: none;
  background-color: white;
  border: solid 2px white;
  border-radius: 0 5px 5px 0;
  padding: 3px;

  @media screen and (max-width: 475px) {
    height: 33px;
  }
`;
export { Header, Image, Contenedor, Boton };
