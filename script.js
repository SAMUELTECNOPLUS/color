document.addEventListener('DOMContentLoaded', function() {
  
  const paletadecolores = document.getElementsByClassName("containerPallete")[0];
  const btnGenerar = document.getElementById("btnGenerar");

  const coloresvalue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  const paleta_size = 5;

  function CrearPaleta() {
    // Limpiar paleta anterior si existe
    paletadecolores.innerHTML = '';
    
    for (let i = 0; i < paleta_size; i++) {
      const creacionpaleta = document.createElement('div');
      creacionpaleta.classList.add('Paletaitem');
      paletadecolores.appendChild(creacionpaleta);
    }

    updatePaleta();
  }

  const colorize = (element) => {
    let color = '#';

    for (let i = 0; i < 6; i++) {
      const randomElement = coloresvalue[Math.floor(Math.random() * coloresvalue.length)];
      color += randomElement;
    }

    element.style.backgroundColor = color;
    element.innerHTML = `<span class="colorHex">${color}</span>`;
  };

  const updatePaleta = () => {
    for(let i = 0; i < paletadecolores.children.length; i++){
      colorize(paletadecolores.children[i]);
    }
  }

  // Crear paleta inicial al cargar la página
  CrearPaleta();

  // Conectar el botón para generar nuevas paletas
  btnGenerar.addEventListener('click', CrearPaleta);

});