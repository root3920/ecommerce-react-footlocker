import styled, { css } from "styled-components";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Head>
      <Contenedor>
        <NavLink to="/">
          <Image
            src="https://www.footlocker.com/built/257/images/FL/logo.svg"
            alt="logo"
          />
        </NavLink>
      </Contenedor>

      <Contenedor logos>
        <Form onSubmit={onSubmit}>
          <Input type="text" placeholder="Search" />
          <Boton>
            <FaSearch color="black" size={20} style={{ cursor: "pointer" }} />
          </Boton>
        </Form>
        <NavLink to="/carrito">
          <FaShoppingCart
            color="white"
            size={25}
            style={{ cursor: "pointer" }}
          />
        </NavLink>
      </Contenedor>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  padding: 0 30px;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  height: 12vh;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
      justify-content: flex-end;
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
export { Header, Image, Contenedor };
