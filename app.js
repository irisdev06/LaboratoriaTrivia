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

if (window.location.pathname == "/triviahistoria.html") { //Creamos una condicional que pregunte sí estamos en el archivo triviahistoria.html y sí es correcto nos muestra las preguntas sobre historia.
    let preguntas = document.getElementById('preguntas')
    let numPregunta = 1; //Iniciamos en la pregunta 1
    let respuestasCorrectas = 0; //Este 0 es para contabilizar las preguntas correctas

    preguntas.innerHTML = `<button class="comenzar" onClick="pregunta(${numPregunta})">Empieza la trivia de Historia</button>`

    function pregunta(pregunta) {
        if (pregunta == 1) {  //Si el valor de pregunta es 1, nos mostrará la pregunta 1.
            preguntas.innerHTML = ` 
<h1 class="pregunta">¿Quién pintó la monalisa?</h1>
<div class="cont-1">
<label><input type="radio" name="respuesta">Miguel Angelo</label><br><!--[0]-->
<label><input type="radio" name="respuesta">Leonardo DaVinci</label><br><!--[1]-->
<label><input type="radio" name="respuesta">Leonardo DiCaprio</label><br><!--[2]-->
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>
</div>`
        } else if (pregunta == 2) {
            preguntas.innerHTML = `
<h1>¿En qué año terminó la segunda guerra mundial?</h1>
<label><input type="radio" name="respuesta">1945</label><br>
<label><input type="radio" name="respuesta">1975</label><br>
<label><input type="radio" name="respuesta">1944</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 3) {
            preguntas.innerHTML = `
<h1>¿Cuándo ocurrió el "Grito de Independencia" en Colombia?</h1>
<label><input type="radio" name="respuesta">7 de Agosto de 1819</label><br>
<label><input type="radio" name="respuesta">4 de Julio de 1776</label><br>
<label><input type="radio" name="respuesta">20 de Julio de 1810</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 4) {
            preguntas.innerHTML = `
<h1>¿Quién fue el primer humano en pisar la luna?</h1>
<label><input type="radio" name="respuesta">Neil Armstrong</label><br>
<label><input type="radio" name="respuesta">Yuri Gagarin</label><br>
<label><input type="radio" name="respuesta">Buzz Aldrin</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 5) {
            preguntas.innerHTML = `
<h1>¿Quién escribió "La Odisea"?</h1>
<label><input type="radio" name="respuesta">Sócrates</label><br>
<label><input type="radio" name="respuesta">Homero</label><br>
<label><input type="radio" name="respuesta">Platón</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        }
    }



    function enviar(num) {
        let respuesta = document.getElementsByName('respuesta')
        /*
        Obtenemos todos los elementos con name 'respuesta', en este caso serian los input type radio
        al haber varios input con nombre 'respuesta', nos devuelve un array
        los array inician desde 0, por eso la respueta 1, en el array es el índice [0]
        La repuesta 2, en el array es el índice [1]
        La respuesta 3, en el array es el índice [2]
        */
        if (num == 1) {
            if (respuesta[1].checked == true) { //Si el .checked es = a true, incrementará el valor de las respuestas correctas
                numPregunta++
                respuestasCorrectas++ //Operador aritmetico que incrementa 1 al valor de la variable
                //Sería respuestasCorrectas =  respuestasCorrectas + 1
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Leonardo DaVinci"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
                // Agarramos el boton de enviar y le agregamos un parrafo diciendo la respueta correcta y el boton para continuar a la siguiente pregunta
                /*
                 innerHTML = Lo que esté dentro del elemento
                 outerHTML = Agarra todo el html de la etiqueta
                 
                 Ejemplo:

                 <div class="caja">Adentro</div>

                 el innerHTML nos devuelve "Adentro"
                 mientras que outerHTML nos devuelve '<div class="caja">Adentro</div>'

                */
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Leonardo DaVinci"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 2) {
            if (respuesta[0].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "1945"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "1945"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 3) {
            if (respuesta[2].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "20 de Julio de 1810"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "20 de Julio de 1810"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 4) {
            if (respuesta[0].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Neil Armstrong"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Neil Armstrong"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 5) {
            if (respuesta[1].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Homero"</p><button class="siguiente" onClick="finalizar(${respuestasCorrectas})">Finalizar</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Homero"</p><button class="siguiente" onClick="finalizar(${respuestasCorrectas})">Finalizar</button>`
            }
        }
    }

    function finalizar(respuestasCorrectas) {
        if (respuestasCorrectas >= 3) {
            /*

            Si tenemos 3 o más respuestas correctas, nos felicitará y nos mostrará nuestras respuestas correctas
            si tenemos menos de 3 respuestas correctas, no dirá "¡Qué pena!" y nos mostrará nuestras respuestas correctas
            En ambos casos nos aparecerá un botón para volver al inicio

            */
            preguntas.innerHTML = `<h1>¡Felicitaciones! Obtuviste un puntaje de ${respuestasCorrectas}/5</h1><br>
            <a class="inicio" href="./index.html">Vuelve al inicio</a>`
        } else {
            preguntas.innerHTML = `<h1>¡Qué pena! Obtuviste un puntaje de ${respuestasCorrectas}/5</h1><br>
            <a class="inicio" href="./index.html">Vuelve al inicio</a>`
        }
    }
}


// ===========TRIVIA MÚSICA================

if (window.location.pathname == "/triviamusica.html") { //Creamos una condicional que pregunte sí estamos en el archivo triviahistoria.html y sí es correcto nos muestra las preguntas sobre historia.
    let preguntas = document.getElementById('preguntas')
    let numPregunta = 1; //Iniciamos en la pregunta 1
    let respuestasCorrectas = 0; //Este 0 es para contabilizar las preguntas correctas

    preguntas.innerHTML = `<button class="comenzar" onClick="pregunta(${numPregunta})">Empieza la trivia de Música</button>`

    function pregunta(pregunta) {
        if (pregunta == 1) {  //Si el valor de pregunta es 1, nos mostrará la pregunta 1.
            preguntas.innerHTML = ` 
<h1 class="pregunta">¿ En qué país se hace anualmente el festival de música electrónica Tomorrowland?</h1>
<div class="cont-1">
<label><input type="radio" name="respuesta">Estados Unidos</label><br><!--[0]-->
<label><input type="radio" name="respuesta">Bélgica</label><br><!--[1]-->
<label><input type="radio" name="respuesta">Reino Unido</label><br><!--[2]-->
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>
</div>`
        } else if (pregunta == 2) {
            preguntas.innerHTML = `
<h1>¿Cuál de las siguientes opciones no es un género musical?</h1>
<label><input type="radio" name="respuesta">Funk</label><br>
<label><input type="radio" name="respuesta">Menta</label><br>
<label><input type="radio" name="respuesta">Merengue </label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 3) {
            preguntas.innerHTML = `
<h1>¿Qué cantante es considerado el rey del rock and roll?</h1>
<label><input type="radio" name="respuesta">Bad bunny</label><br>
<label><input type="radio" name="respuesta">John Lennon</label><br>
<label><input type="radio" name="respuesta">Elvis Presley</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 4) {
            preguntas.innerHTML = `
<h1>¿En qué ciudad nació el Jazz?</h1>
<label><input type="radio" name="respuesta">Cali</label><br>
<label><input type="radio" name="respuesta">Nueva York</label><br>
<label><input type="radio" name="respuesta">Nueva Orleans</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        } else if (pregunta == 5) {
            preguntas.innerHTML = `
<h1>¿El Piano es un instrumento de cuerda"?</h1>
<label><input type="radio" name="respuesta">Verdadero</label><br>
<label><input type="radio" name="respuesta">Falso</label><br>
<button class="enviar" onClick="enviar(${numPregunta})">Enviar</button>`
        }
    }



    function enviar(num) {
        let respuesta = document.getElementsByName('respuesta')
        if (num == 1) {
            if (respuesta[1].checked == true) { 
                numPregunta++
                respuestasCorrectas++ 
                preguntas.getElementsByTagName('label')[1].classList.add("true") 
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Bélgica"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`

            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Bélgica"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 2) {
            if (respuesta[1].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Menta"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[1].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Menta"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 3) {
            if (respuesta[2].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Elvis Presley"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Elvis Presley"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 4) {
            if (respuesta[2].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Nueva Orleans"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[2].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Nueva Orleans"</p><button class="siguiente" onClick="pregunta(${numPregunta})">Siguiente</button>`
            }
        } else if (num == 5) {
            if (respuesta[0].checked == true) {
                numPregunta++
                respuestasCorrectas++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>¡Correcto! La respuesta era "Verdadero"</p><button class="siguiente" onClick="finalizar(${respuestasCorrectas})">Finalizar</button>`
            } else {
                numPregunta++
                preguntas.getElementsByTagName('label')[0].classList.add("true")
                preguntas.getElementsByTagName('button')[0].outerHTML = `<p>La respuesta correcta era "Verdadero"</p><button class="siguiente" onClick="finalizar(${respuestasCorrectas})">Finalizar</button>`
            }
        }
    }

    function finalizar(respuestasCorrectas) {
        if (respuestasCorrectas >= 3) {
            preguntas.innerHTML = `<h1>¡Felicitaciones! Obtuviste un puntaje de ${respuestasCorrectas}/5</h1><br>
            <a class="inicio" href="./index.html">Vuelve al inicio</a>`
        } else {
            preguntas.innerHTML = `<h1>¡Qué pena! Obtuviste un puntaje de ${respuestasCorrectas}/5</h1><br>
            <a class="inicio" href="./index.html">Vuelve al inicio</a>`
        }
    }
}