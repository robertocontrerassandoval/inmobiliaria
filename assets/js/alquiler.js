import { propiedades_alquiler } from './propiedades_alquiler.js';

const mostrarPropiedadesAlquiler = () => {
  const container = document.getElementById('soloPropiedadesAlquiler');

  propiedades_alquiler.forEach((propiedad) => {
    const card = crearTarjeta(propiedad);
    container.appendChild(card);
  });
};

const crearTarjeta = (propiedad) => {
  const card = document.createElement('div');
  card.className = 'col-md-4 mb-4';
  card.innerHTML = `
    <div class="card">
      <img src="${
        propiedad.src
      }" class="card-img-top" alt="Imagen de la propiedad"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p class="card-text">${propiedad.descripcion}</p>
        <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
        <p>
          <i class="fas fa-bed"></i>${propiedad.habitaciones} |
          <i class="fas fa-dollar-sign"></i>${propiedad.costo}
        </p>
        <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
          <i class="fas ${
            propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'
          }"></i>
          ${propiedad.smoke ? 'está permitido fumar' : 'no se permite fumar'}
        </p>
        <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
          <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
          ${propiedad.pets ? 'mascotas permitidas' : 'no se permiten mascotas'}
        </p>
      </div>
    </div>
  `;

  return card;
};

mostrarPropiedadesAlquiler();
