// Preguntas del juego
var questions = [
    {
      question: "¿Qué es un lenguaje de programación orientado a objetos?",
      choices: [
        "Un lenguaje que se basa en la interacción de objetos para resolver problemas",
        "Un lenguaje que solo permite la programación en paradigma orientado a objetos",
        "Un lenguaje que no permite la programación estructurada",
        "Un lenguaje que solo permite la programación en paradigma funcional"
      ],
      correctAnswer: 0
    },
    {
      question: "¿Qué es un algoritmo?",
      choices: [
        "Un método utilizado para codificar programas",
        "Un tipo de dato utilizado para almacenar información",
        "Un conjunto ordenado de instrucciones para resolver un problema",
        "Un lenguaje de programación específico"
      ],
      correctAnswer: 2
    },
    {
      question: "¿Qué es la programación concurrente?",
      choices: [
        "La programación de sistemas operativos",
        "La capacidad de ejecutar múltiples tareas simultáneamente",
        "La programación de videojuegos",
        "La programación de sistemas embebidos"
      ],
      correctAnswer: 1
    },
    {
      question: "¿Cuál es el propósito de un diagrama de clases en UML?",
      choices: [
        "Representar el flujo de control de un programa",
        "Representar la secuencia de interacción entre los objetos en un sistema",
        "Representar la estructura física de un sistema informático",
        "Representar la estructura estática de un sistema y las relaciones entre las clases"
      ],
      correctAnswer: 3
    },
    {
      question: "¿Qué es la programación orientada a eventos?",
      choices: [
        "Un enfoque de programación donde los programas responden a eventos generados por el usuario o el sistema",
        "Un enfoque de programación que solo permite el uso de eventos predefinidos",
        "Un enfoque de programación obsoleto",
        "Un enfoque de programación utilizado exclusivamente en la web"
      ],
      correctAnswer: 0
    },
    {
      question: "¿Cuál es el propósito de la programación modular?",
      choices: [
        "Desarrollar programas sin utilizar módulos",
        "Crear programas con un único módulo que contenga todas las funciones",
        "Dividir un programa en módulos más pequeños para facilitar el desarrollo y el mantenimiento",
        "Crear programas que solo funcionen en un sistema operativo específico"
      ],
      correctAnswer: 2
    },
    {
      question: "¿Qué es un sistema operativo?",
      choices: [
        "Un programa de edición de texto",
        "Un software que administra los recursos y servicios de un computador",
        "Un dispositivo de entrada y salida",
        "Un lenguaje de programación"
      ],
      correctAnswer: 1
    },
    {
      question: "¿Qué es la ingeniería de requisitos?",
      choices: [
        "La creación de requisitos no funcionales",
        "La programación de requisitos específicos",
        "La etapa final del desarrollo de software",
        "El proceso de identificar, analizar y documentar los requisitos de un sistema"
      ],
      correctAnswer: 3
    },
    {
      question: "¿Cuál es el objetivo principal de la ingeniería de software?",
      choices: [
        "Escribir código fuente de manera rápida sin planificación",
        "Crear programas que no sean compatibles con otros sistemas",
        "Desarrollar software de calidad de manera sistemática y eficiente",
        "Producir documentación técnica compleja"
      ],
      correctAnswer: 2
    },
    {
      question: "¿Qué es la programación en capas?",
      choices: [
        "Un enfoque de diseño de software donde la funcionalidad se divide en capas o niveles lógicos",
        "Un enfoque de programación que utiliza múltiples lenguajes de programación",
        "La programación de interfaces de usuario",
        "La programación de aplicaciones web"
      ],
      correctAnswer: 0
    }
  ];
    // Agregar más preguntas...
    // Variables de estado del juego
    var currentQuestion = 0;
    var score = 0;
    
    // Elementos HTML
    var startContainer = document.getElementById("start-container");
    var questionContainer = document.getElementById("question-container");
    var choicesContainer = document.getElementById("choices-container");
    var resultElement = document.getElementById("result");
    var nextButton = document.getElementById("next-btn");
    var timerElement = document.getElementById("timer");
    var endContainer = document.getElementById("end-container");
    
    // Botón de comenzar juego
    var startButton = document.getElementById("start-btn");
    startButton.addEventListener("click", startGame);
    
    // Botón de finalizar juego
    var endButton = document.getElementById("end-btn");
    endButton.addEventListener("click", restartGame);
    
    // Iniciar el juego
    function startGame() {
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    choicesContainer.style.display = "block";
    timerElement.style.display = "block";
    loadQuestion();
    startTimer();
    }
    
    // Reiniciar el juego
    function restartGame() {
    currentQuestion = 0;
    score = 0;
    resultElement.textContent = "";
    endContainer.style.display = "none";
    startGame();
    }
    
    // Cargar la pregunta actual
    function loadQuestion() {
    var questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestion].question;
    
    var choices = questions[currentQuestion].choices;
    var choicesHTML = "";
    for (var i = 0; i < choices.length; i++) {
    choicesHTML += '<button class="choice" onclick="checkAnswer(' + i + ')">' + choices[i] + '</button>';
    }
    choicesContainer.innerHTML = choicesHTML;
    }
    
    // Verificar la respuesta seleccionada
    function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correctAnswer) {
    score++;
    resultElement.textContent = "¡Respuesta correcta!";
    } else {
    resultElement.textContent = "Respuesta incorrecta";
    }
    
    // Deshabilitar los botones de elección
    var choiceButtons = document.getElementsByClassName("choice");
    for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = true;
    }
    
    nextButton.style.display = "block";
    }
    
    // Cargar la siguiente pregunta
    function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
    loadQuestion();
    resultElement.textContent = "";
    nextButton.style.display = "none";
    // Habilitar los botones de elección
    var choiceButtons = document.getElementsByClassName("choice");
    for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].disabled = false;
    }
    } else {
    endGame();
    }
    }
    
    // Finalizar el juego
    function endGame() {
    questionContainer.style.display = "none";
    choicesContainer.style.display = "none";
    timerElement.style.display = "none";
    endContainer.style.display = "block";
    resultElement.textContent = "Has finalizado el juego. Puntaje: " + score + " de " + questions.length;
    }
    
    // Temporizador del juego
    var timeLeft = 60;
    var timerInterval;
    
    function startTimer() {
    
    timeLeft = 60;
    timerElement.textContent = formatTime(timeLeft);
    
    timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = formatTime(timeLeft);if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function formatTime(time) {
var minutes = Math.floor(time / 60);
var seconds = time % 60;
return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

// Evento del botón "Siguiente"
nextButton.addEventListener("click", nextQuestion);   

var backgroundMusic = document.getElementById("background-music");

// Iniciar la reproducción de la música de fondo
function playBackgroundMusic() {
  backgroundMusic.play();
}

// Pausar la reproducción de la música de fondo
function pauseBackgroundMusic() {
  backgroundMusic.pause();
}

// Llamar a playBackgroundMusic() al iniciar el juego
startButton.addEventListener("click", function() {
  playBackgroundMusic();
  startGame();
});

// Pausar la música de fondo al finalizar el juego
  // Resto del código...
  pauseBackgroundMusic();

  


