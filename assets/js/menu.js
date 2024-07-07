document.addEventListener("DOMContentLoaded", function (event) {
  const mobile_btn = document.querySelector(".navbar__mobile-btn");
  const mobile_menu = document.querySelector(".navbar__mobile-list");

  mobile_btn.addEventListener("click", function () {
    const menu_open = document.querySelector(".menu_open");
    if (menu_open) {
      mobile_menu.style.display = "none";
      mobile_menu.classList.remove("menu_open");
    } else {
      mobile_menu.style.display = "block";
      mobile_menu.classList.add("menu_open");
    }
  });

  const submenu = function (boton, submenu, className) {
    boton.addEventListener("click", function () {
      const drop = document.querySelector("." + className);
      if (drop) {
        submenu.style.display = "none";
        submenu.classList.remove(className);
      } else {
        submenu.style.display = "block";
        submenu.classList.add(className);
      }
    });
  };
  //Submenu
  const dropdown_btn = document.querySelector("#icon1");
  const dropdown_submenu = document.querySelector("#submenu1");
  //Ejecutar funcionalidad submenu
  submenu(dropdown_btn, dropdown_submenu, "drop");
  //Redimensionado para que cuando vuelva a poner la web en tamaño grande, no vea los textos del menú de hamburguesa
  window.addEventListener("resize", function () {
    //el evento resize es para cuando la pantalla cambie de tamaño
    const tamaño = parseFloat(document.body.clientWidth); //esto lo que te da es la anchura del navegador, de la pantalla. Lo convierto previamente a numero
    if (tamaño > 1024) {
      //1024 es mi primer tamaño de media query
      mobile_menu.style.display = "none";
      mobile_menu.classList.remove("menu_open");
    }
  });
});
