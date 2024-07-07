document.addEventListener("DOMContentLoaded", (event) => {
  const input_search = document.querySelector(".search__input");
  const btn_search = document.querySelector(".navbar__button");

  btn_search.addEventListener("click", () => {
    const visible = document.querySelector(".visible");
    if (visible) {
      //si visible es true, oculto el botón
      input_search.style.width = "0"; //esto va a hacer que por defecto la anchura del botón sea 0 y no se muestre

      input_search.classList.remove("visible"); //en caso de que tenga la clase visible, se la quitas
    } else {
      input_search.style.width = "20rem";
      input_search.classList.add("visible");
    }
  });
});
