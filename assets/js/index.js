import propiedadesVenta from "./propiedades_venta.js"
import propiedadesAlquiler from "./propiedades_alquiler.js"

const mostrarPropiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId)

    const propiedadesPorMostrar = []

    for (let i = 0; i < 3; i++) {
        if(i < propiedades.length){
            propiedadesPorMostrar.push(propiedades[i])
        }
    }

    propiedadesPorMostrar.forEach((propiedad) =>{

        const card = document.createElement("div")
        card.className = "col-md-a mb-4"
        card.innerHTML =`
            <div class = "card">
            <img
             scr = "${propiedad.src}"
            class="card-img-top"
            alt="Imagen de la propiedad"
            />
            <div class="card-body">
            <h5 class="card-title">${propiedad.title}</h5>
            <p class="card-text">${propiedad.description}</p>
            <p>
            <i class"fas fa-bed">${propiedad.bedrooms}</i>
            <i class"fas fa-bath">${propiedad.bathrooms}</i>
            <i class"fas fa-dollar-sing">${propiedad.price}</i>
            </p>

            <p class = "${propiedad.smoking ? "text-sucess" : "text-danger"}">
                <i class ="fas ${propiedad.smoking ? "fa-smoking" : "fa-smoking-ban"}"></i>
                ${propiedad.smoking ? "esta permitido fomar" : "no se permite fumar"}
            </p>

            <p class = "${propiedad.pets ? "text-sucess" : "text-danger"}">
                <i class ="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
                ${propiedad.pets ? "mascotas permitidas" : "no se permiten mascotas"}
            </p>
            </div>
            </div>

        ` ;
        container.appendChild(card)
    })
};

window.onload = () => {
    mostrarPropiedades(propiedadesVenta, "propiedadesVentaContainer")
    mostrarPropiedades(propiedadesAlquiler, "propiedadesAlquilerContainer")

}
