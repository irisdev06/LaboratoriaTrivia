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



//Hicimos una condicional preguntando donde estamos y si nos devuelve el valor igual al valor triviahistoria
if (window.location.pathname == "/triviahistoria.html") {
    let preguntas = document.getElementById('preguntas')
    let numPregunta = 1;
    let respuestasCorrectas = 0;

    preguntas.innerHTML = `<button class="comenzar" onClick="pregunta(${numPregunta})">Empieza la trivia de Historia</button>`

    function pregunta(pregunta) {
        if (pregunta == 1) {
            preguntas.innerHTML = `
<h1>¿Cómo se llamaba el comandante de 80 soldados en el ejercito romano antiguo?</h1>
<label><input type="radio" name="respuesta">Centurion</label><br>
<label><input type="radio" name="respuesta">Leonidas</label><br>
<label><input type="radio" name="respuesta">Bonaparte</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 2) {
            preguntas.innerHTML = `
<h1>Qué mes lleva el nombre de un emperador romano?</h1>
<label><input type="radio" name="respuesta">Enero</label><br>
<label><input type="radio" name="respuesta">Febrero</label><br>
<label><input type="radio" name="respuesta">Agosto</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
} else if (pregunta == 3) {
    preguntas.innerHTML = `
<h1>"¿Qué dama Austriaca se convirtió en reina de francia en 1774?" en Colombia?</h1>
<label><input type="radio" name="respuesta">Maria Antonieta</label><br>
<label><input type="radio" name="respuesta">Juana de arco</label><br>
<label><input type="radio" name="respuesta">Emma de provenza</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
}
    
