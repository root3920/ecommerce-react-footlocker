import styled from "styled-components";
import { Image, Contenedor } from "./Header";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Foot>
      <Contenedor>
        <Image
          src="https://www.footlocker.com/built/257/images/FL/logo.svg"
          alt="logo"
        />
      </Contenedor>

      <Contenedor logos>
        <a href="https://github.com/root3920" target="_blank">
          <BsGithub color="white" size={20} style={{ cursor: "pointer" }} />
        </a>

        <a
          href="https://www.linkedin.com/in/federico-alarc%C3%B3n-3672a3200/"
          target="_blank"
        >
          <BsLinkedin color="white" size={20} style={{ cursor: "pointer" }} />
        </a>
        <Enlace
          href="https://drive.google.com/file/d/1VLD6BqjJsLwfqp4_yYAFmHgYMsPbTRbS/view?usp=share_link"
          target="_blank"
        >
          <H3>CV</H3>
        </Enlace>
      </Contenedor>
    </Foot>
  );
};

const Foot = styled.div`
  background-color: black;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px;
`;

const H3 = styled.h3`
  color: ${(props) => (props.color ? "black" : "white")};
  font-family: "Poppins", sans-serif;
`;

const Enlace = styled.a`
  text-decoration: none;
`;
export { Footer, Enlace, H3 };
