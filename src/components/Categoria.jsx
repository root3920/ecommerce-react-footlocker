import { Producto } from "./Producto";
import styled, { css } from "styled-components";
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextoProducto } from "../context/contextoProductos";

const Categoria = ({ link, category }) => {
  const [maxRange, setMaxRange] = useState(10000);

  const { productos } = useContext(ContextoProducto);

  const actualizarRango = (e) => setMaxRange(e.target.value);

  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "30%", padding: "50px" }}>
        <Enlace as={NavLink} to="/">
          HOME
        </Enlace>{" "}
        ➜{" "}
        <Enlace as={NavLink} to={`/${link}`}>
          {category.toUpperCase()}
        </Enlace>
        <TituloCategoria>{category.toUpperCase()}</TituloCategoria>
        <form>
          <SubTitulo>Tipo de Producto</SubTitulo>
          <hr style={{ border: "solid 1px black", marginBottom: "15px" }}></hr>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="accesorios" name="accesorios" />
            <Label for="accesorios">Accesorios</Label>
          </div>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="ropa" name="ropa" />
            <Label for="ropa">Ropa</Label>
          </div>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="calzado" name="calzado" />
            <Label for="calzado">Calzado</Label>
          </div>

          <SubTitulo>Rango de Precio</SubTitulo>
          <hr style={{ border: "solid .8px black", marginBottom: "15px" }}></hr>

          <Rango
            type="range"
            min={0}
            max={10000}
            onChange={actualizarRango}
            value={maxRange}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Label money>$</Label>
              <Label>0</Label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Label money>$</Label>
              <Input type="text" value={maxRange} onChange={actualizarRango} />
            </div>
          </div>

          <SubTitulo>Marcas</SubTitulo>
          <hr style={{ border: "solid 1px black", marginBottom: "15px" }}></hr>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="fjallraven" name="fjallraven" />
            <Label for="fjallraven">Fjallraven</Label>
          </div>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="jhonny-cotton" name="jhonny-cotton" />
            <Label for="jhonny-cotton">Jhonny Cotton</Label>
          </div>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="adidas" name="adidas" />
            <Label for="adidas">Adidas</Label>
          </div>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="nike" name="nike" />
            <Label for="nike">Nike</Label>
          </div>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="levis" name="levis" />
            <Label for="levis">Levis</Label>
          </div>

          <div style={{ margin: "8px" }}>
            <input type="checkbox" id="converse" name="converse" />
            <Label for="converse">Converse</Label>
          </div>
        </form>
      </aside>

      <GridDiv>
        {productos.map((producto) => {
          if (
            (producto.category === category && producto.price < maxRange) ||
            producto.title.toLowerCase().includes(category.toLowerCase())
          )
            return (
              <Producto
                imagen={producto.image}
                titulo={producto.title}
                categoria={producto.category}
                key={producto.id}
                precio={producto.price}
                id={producto.id}
                categoryPage={true}
              />
            );
        })}
      </GridDiv>
    </div>
  );
};

const GridDiv = styled.div`
  height: 100%;
  width: 70%;
  display: grid;
  grid-template-rows: repeat(2, 340px);
  grid-template-columns: repeat(3, 240px);
  padding: 20px;
  gap: 10px;
  padding-top: 160px;
  padding-bottom: 50px;
`;

const SubTitulo = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 20px;
`;
const TituloCategoria = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const Enlace = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: #848484;
`;

const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 5px;

  ${(props) =>
    props.money &&
    css`
    margin: 0;
    font-weight: bold;
    font-size: 18px;
      }
    `}
`;

const Rango = styled.input`
  width: 100%;
`;

const Input = styled.input`
  max-width: 50px;
  padding: 2px;
`;

export default Categoria;
