const siguiente = (slider) => {
  // Comprobamos que el slider tenga elementos
  if (slider.current.children.length > 0) {
    console.log("Siguiente");

    // Obtenemos el primer elemento del slider.
    const primerElemento = slider.current.children[0];

    // Establecemos la transicion para el slider.
    slider.current.style.transition = `500ms ease-out all`;

    const tamañoSlide = slider.current.children[0].offsetWidth;

    // Movemos el slider
    slider.current.style.transform = `translateX(-${tamañoSlide}px)`;

    const transicion = () => {
      // Reiniciamos la posicion del slider.
      slider.current.style.transition = "none";
      slider.current.style.transform = `translateX(0)`;

      // Tomamos el primer elemento y lo mandamos al final.
      slider.current.appendChild(primerElemento);

      slider.current.removeEventListener("transitionend", transicion);
    };

    // Eventlistener para cuando termina la animacion.
    slider.current.addEventListener("transitionend", transicion);
  }
};

const anterior = (slider) => {
  console.log("Anterior");
  if (slider.current.children.length > 0) {
    // Obtenemos el ultimo elemento del slider.
    const index = slider.current.children.length - 1;
    const ultimoElemento = slider.current.children[index];
    slider.current.insertBefore(ultimoElemento, slider.current.firstChild);

    slider.current.style.transition = "none";
    const tamañoSlide = slider.current.children[0].offsetWidth;
    slider.current.style.transform = `translateX(-${tamañoSlide}px)`;

    setTimeout(() => {
      slider.current.style.transition = `900ms ease-out all`;
      slider.current.style.transform = `translateX(0)`;
    }, 30);
  }
};

export { anterior, siguiente };
