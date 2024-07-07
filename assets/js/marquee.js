document.addEventListener("DOMContentLoaded", (event) => {
  function marquee (selector_list, speed) {
    const list = document.querySelector(selector_list);
    let movimiento = 0;//esto es un contador de desplazamiento

    setInterval(() => {
      list.style.marginLeft = `-${movimiento}px`;//el menos indica un margen negativo, es decir que se va a ir moviendo hacia la izquierda
      if (movimiento > list.clientWidth) {//lo que hace aquí es que si el movimiento es superior a la anchura de la lista, quiere decir que ya la ha recorrido y
        //tenemos que volver al 0 y empezar de nuevo y reseteas la variable y volvemos a empezar
        movimiento = 0;
      }
      movimiento = movimiento + speed;//en cada movimiento se le suma la velocidad, que es 0,3... lo cual quiere decir que cada momento se irá moviendo 0,3 px a la izda
    }, 0);//el 0 indica que se ejecuta en bucle continuo
  };

  marquee(".marquee__container", 0.2);//el selector sería el container de la marquesina
});
