import styled, { css } from "styled-components";
import Item from "./Item";
import "../styles/scroll.css";

const Carrito = ({ compraActual, totalCompra}) => {

  const impuesto = (a, b) => (a * b) / 100;
  const total = (a,b) => (a+b)

  const impuestos = impuesto(totalCompra, 7);
  
  const precioTotal = total(totalCompra, impuestos);

  return (
    <Container>
      <AlLado className="indicator" derecho>
        {compraActual.map((item) => {
          if(item)
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
        })}
      </AlLado>

      <AlLado>
        <Column>
        <Row>
          <p>
            {compraActual.length > 1
              ? "Items sin descuento"
              : "Item sin descuento"}
          </p>
          <p>${totalCompra.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Descuento</p>
          <p>${0}</p>
        </Row>
        <hr></hr>
        <Row>
          <p>Sub Total</p>
          <p>${totalCompra.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Impuestos</p>
          <p>${impuestos.toFixed(2)}</p>
        </Row>
        <Row>
          <p>Envio</p>
          <p>Por definir</p>
        </Row>

        <Row>
          <p>TOTAL</p>
          <p>${precioTotal.toFixed(2)}</p>
        </Row>
        </Column>
        <Column>
          <Boton>SEGUIR COMPRANDO</Boton>
          <Boton>BORRAR MI PEDIDO</Boton>
          <Boton>HACER COMPRA</Boton>
        </Column>
      </AlLado>
      
    </Container>
  );
};

const Container = styled.div`
height: 88vh;
width: 100%;
color white;
display: flex;
overflow-y: hidden;

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

${(props) =>
  props.derecho &&
  css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    width: 55%;
    padding: 20px;
    min-height: 80vh;
    overflow-y: visible;
  `}

`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 20px;
`;

const Boton = styled.div`
width: 100%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
background-color: #ec981a;
text-align: center;
font-family: "Poppins", sans-serif;
font-weight: bold;
color: white;
cursor: pointer;
border-radius: 7px;
`;


export default Carrito;
