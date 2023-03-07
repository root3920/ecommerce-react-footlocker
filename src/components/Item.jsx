import styled, { css } from "styled-components";

const Item = ({ image, title, amount, price, category }) => {
  const multiplicarFinal = (a, b) => a * b;

  const precioFinal = multiplicarFinal(price, amount);

  return (
    <Div>
      <Imagen src={image} alt={category} height="100%" />
      <H3>{title}</H3>
      <H3 amount>Cantidad: {amount}</H3>
      <H3 amount>USD {precioFinal}</H3>
    </Div>
  );
};

const Div = styled.div`
  min-height: 80px;
  width: 90%;
  border-radius: 5px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-family: "Poppins", sans-serif;
`;

const Imagen = styled.img`
  padding: 10px;
  margin: 0 10px;
  width: 13%;
`;

const H3 = styled.h3`
  width: 60%;
  font-size: 12px;

  ${(props) =>
    props.amount &&
    css`
      width: 20%;
    `}
`;

export default Item;
