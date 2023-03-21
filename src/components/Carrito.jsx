import styled, { css } from "styled-components";
import Item from "./Item";
import "../styles/scroll.css";
import { NavLink } from "react-router-dom";
import carroVacio from "../images/carro-vacio.png";
import { useContext } from "react";
import { ContextoProducto } from "../context/contextoProductos";
import { usePrecioTotal } from "../hooks/usePrecioTotal";

const Carrito = ({ setAbrirModal }) => {
  const { precioTotal, impuestos } = usePrecioTotal();

  const { compra, total, borrarCompra } = useContext(ContextoProducto);

  return (
    <Container>
      <div className={compra.length > 0 ? "contenedor-items" : "carrito-vacio"}>
        {compra.length > 0 ? (
          compra.map((item) => {
            if (item)
              return (
                <Item
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  amount={item.cantidad}
                  price={item.price}
                  key={item.id}
                />
              );
          })
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={carroVacio} alt="" />
            <p
              style={{
                fontSize: "20px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "bold",
                marginLeft: "45px",
              }}
            >
              El carrito está vacio
            </p>
          </div>
        )}
      </div>

      <AlLado>
        <Column>
          <Row>
            <p>
              {compra.length > 1 ? "Items sin descuento" : "Item sin descuento"}
            </p>
            <p>${total.toFixed(2)}</p>
          </Row>
          <Row>
            <p>Descuento</p>
            <p>${0}</p>
          </Row>
          <hr></hr>
          <Row>
            <p style={{ color: "gray" }}>Sub Total</p>
            <p style={{ color: "gray" }}>${total.toFixed(2)}</p>
          </Row>
          <Row>
            <p style={{ color: "gray" }}>Impuestos</p>
            <p style={{ color: "gray" }}>${impuestos.toFixed(2)}</p>
          </Row>
          <Row>
            <p>Envio</p>
            <p>Por definir</p>
          </Row>

          <Row>
            <p style={{ fontSize: "4.5vmin" }}>TOTAL</p>
            <p style={{ fontSize: "4.5vmin" }}>${precioTotal.toFixed(2)}</p>
          </Row>
        </Column>
        <Column>
          <Boton as={NavLink} to="/">
            SEGUIR COMPRANDO
          </Boton>
          <Boton onClick={() => borrarCompra()}>BORRAR MI PEDIDO</Boton>
          <Boton onClick={() => setAbrirModal(true)}>HACER COMPRA</Boton>
        </Column>
      </AlLado>
    </Container>
  );
};

const Container = styled.div`
height: 88vh;
width: 100%;
color black;
display: flex;
overflow-y: hidden;

@media screen and (max-width: 750px){
  flex-direction: column;
  height: 100%;
}

${(props) =>
  props.inicioSesion &&
  css`
  overflow-y: auto;
  `}

`;

const AlLado = styled.aside`
min-height: 100%;
width: 45%;
color black;
border: solid 2px #e8e8e876;
overflow-y: hidden;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-end;

  @media screen and (max-width: 750px){
    width: 100%
  }


`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 3vmin;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 20px;
`;

const Boton = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec981a;
  text-align: center;
  font-size: 3vmin;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: white;
  cursor: pointer;
  border-radius: 7px;
  border: none;
  text-decoration: none;

  ${(props) =>
    props.inicioSesion &&
    css`
      height: 45px;
      font-weight: 500;
      border-radius: 5px;
      font-size: 2.8vmin;
    `}
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
`;

export { Carrito, Boton, Container };
