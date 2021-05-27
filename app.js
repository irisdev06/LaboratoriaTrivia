function guardarNombre() {
    var nombre = prompt('¿Cuál es tu nombre?')
    //Creamos la función para que guarde el nombre y no se abra el prompt al cargar la página.
    var botones = document.getElementById("botones") //Creamos una variable botones que está guardando el elemento con ID botones
    botones.innerHTML = `<h1 class='btn-title'>Hola ${nombre}, Haz click para ir a la Trivia Laboratoria.</h1>
    <div class='container-btn'>
    <a href='triviahistoria.html' class='btn-trivia1'>Historia</a>
    <a href='triviamusica.html' class='btn-trivia2'>Música</a>
    </div>`
    //InnerHtml es parte del DOM e incrusta HTML dentro del elemento.
}




