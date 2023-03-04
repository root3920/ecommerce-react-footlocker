const Carrito = ({ compraActual }) => {
  return (
    <div style={{ padding: "59px" }}>
      {compraActual.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

export default Carrito;
