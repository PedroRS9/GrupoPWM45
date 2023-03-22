document.addEventListener("DOMContentLoaded", () => {
    fetch('../data/articulo.json')
        .then(response => response.json())
        .then(data => {
            try {

                //Carga artículo principal
                let categoriaIndex = ".titulo";
                let articuloIndex = ".articulo-primera-parte";
                let categoria = document.querySelector(categoriaIndex);
                let articulo = document.querySelector(articuloIndex);
                
                let titulo = articulo.querySelector(".titulo-articulo");
                let entrada = articulo.querySelector(".entrada-articulo");
                let imagen = articulo.querySelector(".imagen-articulo");
                let pie_foto = articulo.querySelector(".pie-de-foto-articulo");
                let datos = articulo.querySelector(".datos-articulo");
                let fecha = articulo.querySelector(".fecha-articulo");
                let contenido = articulo.querySelector(".contenido-articulo");

                categoria.textContent = data[0].categoria;
                titulo.textContent = data[0].titulo;
                entrada.textContent = data[0].entrada;
                imagen.src = data[0].imagen;
                pie_foto.textContent = data[0].pie_foto;
                datos.textContent = data[0].datos;
                fecha.textContent = data[0].fecha;
                contenido.textContent = data[0].contenido;

                //Carga de articulos mas vistos y articulos relacionados con el articulo principal
                let vistos_and_laterales = document.querySelector(".articulo-segunda-parte");
                let vistos_and_laterales_titulo = vistos_and_laterales.querySelectorAll('h3');
                let vistos_and_laterales_articulos = vistos_and_laterales.querySelectorAll('li');

                vistos_and_laterales_titulo[0].textContent = data[1].titulo_mas_vistos;
                vistos_and_laterales_titulo[1].textContent = data[1].titulo_relacionados;
                vistos_and_laterales_articulos[0].textContent = data[1].articulo1_mas_vistos;
                vistos_and_laterales_articulos[1].textContent = data[1].articulo2_mas_vistos;
                vistos_and_laterales_articulos[2].textContent = data[1].articulo3_mas_vistos;
                vistos_and_laterales_articulos[3].textContent = data[1].articulo1_relacionados;
                vistos_and_laterales_articulos[4].textContent = data[1].articulo2_relacionados;
                vistos_and_laterales_articulos[5].textContent = data[1].articulo3_relacionados;

                //Carga de la caja de comentarios
                let caja_comentarios = document.querySelector(".caja-comentarios");
                let titulo_caja_comentarios = caja_comentarios.querySelector('h2');

                let imagen_usuario = caja_comentarios.querySelectorAll('img');
                let nombre_and_contenido_usuario = caja_comentarios.querySelectorAll('p');

                titulo_caja_comentarios.textContent = data[2].titulo_caja_comentarios;
                imagen_usuario[0].src = data[2].imagen_usuario1;
                imagen_usuario[1].src = data[2].imagen_usuario2;

                nombre_and_contenido_usuario[0].textContent = data[2].nombre_usuario1;
                nombre_and_contenido_usuario[1].textContent = data[2].contenido_comentario_usuario1;
                nombre_and_contenido_usuario[2].textContent = data[2].nombre_usuario2;
                nombre_and_contenido_usuario[3].textContent = data[2].contenido_comentario_usuario2;
                
            } catch (error) {
                console.log(error);
            }

        })
})