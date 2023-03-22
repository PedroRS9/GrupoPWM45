let arrayArticulos = [".articulo-izquierdo", ".articulo-central", ".articulo-derecho","cuatro-articulos1.1","cuatro-articulos1.2",
"cuatro-articulos1.3","cuatro-articulos1.4","cuatro-articulos2.1","cuatro-articulos2.2","cuatro-articulos2.3","cuatro-articulos2.4"];

document.addEventListener("DOMContentLoaded", () => {
    fetch('../data/home.json')
        .then(response => response.json())
        .then(data => {
            try {

                for (let i = 0; i < arrayArticulos.length; i++) {
                    let articuloIndex = arrayArticulos[i];
                    
                    if (i < 3) {
                        let articulo = document.querySelector(articuloIndex);
                        let imagen = articulo.querySelector('img');
                        let titulo = articulo.querySelector('h2');
                        let datos = articulo.querySelector(".datos");
                        let resumen = articulo.querySelector(".resumen");

                        imagen.src = data[i].imagen;
                        titulo.textContent = data[i].titulo;
                        datos.textContent = data[i].datos;
                        resumen.textContent = data[i].resumen;

                    }else{
                        let articulo = document.getElementById(articuloIndex);
                        let imagen = articulo.querySelector('img');
                        let titulo = articulo.querySelector('h4');
                        let datos = articulo.querySelector(".datos");

                        imagen.src = data[i].imagen;
                        titulo.textContent = data[i].titulo;
                        datos.textContent = data[i].datos;
                    }
                

                }
            } catch (error) {
                console.log(error);
            }

        })
})