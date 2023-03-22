document.addEventListener("DOMContentLoaded", () => {
    fetch('../data/home.json')
        .then(response => response.json())
        .then(data => {
            try {
                let array = [".articulo-izquierdo", ".articulo-central", ".articulo-derecho", "cuatro-articulos1.1", "cuatro-articulos1.2",
                    "cuatro-articulos1.3", "cuatro-articulos1.4", "cuatro-articulos2.1", "cuatro-articulos2.2", "cuatro-articulos2.3",
                    "cuatro-articulos2.4","video1", "video2", "video3", "video4"];
                    
                for (let i = 0; i < array.length; i++) {
                    let articuloIndex = array[i];
                    //carga de articulos principales
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

                    }
                    //carga de cuatro articulos
                    if ((i >= 3) && (i < 11)) {
                        let articulo = document.getElementById(articuloIndex);
                        let imagen = articulo.querySelector('img');
                        let titulo = articulo.querySelector('h4');
                        let datos = articulo.querySelector(".datos");

                        imagen.src = data[i].imagen;
                        titulo.textContent = data[i].titulo;
                        datos.textContent = data[i].datos;
                    }

                    //carga de videos
                    if (i >= 11) {
                        let articulo = document.getElementById(articuloIndex);
                        articulo.src = data[i].src;
                    }


                }
            } catch (error) {
                console.log(error);
            }

        })
})