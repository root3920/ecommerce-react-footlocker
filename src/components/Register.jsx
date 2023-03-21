import {
  Contenedor,
  Banner,
  Input,
  Form,
  Div,
  TituloForm,
  SubtituloForm,
} from "./Login";
import Banners from "../images/Banner.jpg";
import { Boton } from "./Carrito";
import { useState, useContext } from "react";
import { ContextoProducto } from "../context/contextoProductos";
import db from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //Estados del Formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Conectarse al contexto
  const { setLogin } = useContext(ContextoProducto);
  const navigate = useNavigate();

  //Funcion que se ejecuta despues de enviar formulario
  const onSubmitRegister = async (e) => {
    e.preventDefault();
    if (
      password === confirmPassword &&
      (password !== "" || confirmPassword !== "")
    ) {
      //Se crea un Objeto Usuario
      const Usuario = {
        name: nombre,
        lastName: apellido,
        fullName: `${nombre} ${apellido}`,
        email: email,
        password: password,
      };

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "usuarios"), {
        name: Usuario.fullName,
        email: Usuario.email,
        password: Usuario.password,
      });
      console.log("Document written with ID: ", docRef.id);

      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLogin(true);
      navigate("/")
    } else {
      console.log("Las contraseñas no son iguales");
      setPassword("");
      setConfirmPassword("");
   
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
        <div style={{ height: "12%" }}>
          <TituloForm>Bienvenido a Footlocker 👋</TituloForm>
          <SubtituloForm>
            Necesitamos unos datos básicos para empezar
          </SubtituloForm>
        </div>
        <Form action="" onSubmit={onSubmitRegister}>
          <Div nombres>
            <div>
              <label htmlFor="name">Nombre</label>
              <Input
                type="text"
                id="name"
                value={nombre}
                placeholder="Ingrese su Nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="last-name">Apellido</label>
              <Input
                type="text"
                id="last-name"
                value={apellido}
                placeholder="Ingrese su Apellido"
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
          </Div>
          <Div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="Ingrese su correo"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Div>

          <Div>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              value={password}
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Div>

          <Div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              placeholder="Confirme su contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Div>

          <Boton inicioSesion>
            Registrarse
          </Boton>
        </Form>
      </Banner>
    </Contenedor>
  );
};

export default Register;
