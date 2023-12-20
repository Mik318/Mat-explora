import "./main.css";
import Experience from "./Experience/Experience.js";
import Interface from "./Interface/Interface.js";

class Main {
    constructor() {
        this.createInterface();
        this.createExperience();
        this.addEventListeners();
    }

    createInterface() {
        this.interface = new Interface();
    }

    createExperience() {
        this.experience = new Experience(
            document.querySelector("canvas.experience-canvas")
        );

        this.experience.world.on("updateMessage", (objectName) => {
            this.interface.message.setCrosshair(objectName);
            this.interface.message.setMessage(objectName);
        });

        // // Seleccionar la etiqueta de audio
        // setTimeout(() => {
        //     const audioElement = document.querySelector('audio');
        //     // Iniciar la reproducción automáticamente después de cargar la página
        //     document.addEventListener('DOMContentLoaded', function () {
        //         audioElement.play();
        //     });
        // }, 5000)
    }

    addEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            const audioElement = document.getElementById('audioPlayer');
            const playButton = document.getElementsByClassName('botón');
            console.log(playButton);
            // Add an event listener for the play button
            playButton[0].addEventListener('click', () => {
                // Toggle between play and pause icons
                if (audioElement.paused) {
                    audioElement.play();
                } else {
                    audioElement.pause();
                }
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('play-btn').addEventListener('click', this.iniciarEntornoVirtual.bind(this));
            document.getElementById('op-btn').addEventListener('click', this.iniciarRealidadAumentada.bind(this));
            document.getElementById('media-btn').addEventListener('click', this.salir.bind(this));
            document.getElementById('op-btn1').addEventListener('click', this.filtro.bind(this));
            document.addEventListener('keydown', this.handleKeyPress.bind(this));
        });
    }

    iniciarEntornoVirtual(event) {
        event.preventDefault();
        // Ocultar el <nav> al hacer clic en "Iniciar entorno virtual"
        document.querySelector('nav').style.display = 'none';
        document.getElementById('play-btn').style.display = 'none';
        // Aquí puedes agregar lógica adicional si es necesario
    }

    iniciarRealidadAumentada(event) {
        event.preventDefault();
        window.open('https://mik318.github.io/math-xplora', '_blank');
        // Lógica para "Iniciar realidad aumentada"
    }

    salir(event) {
        event.preventDefault();
        document.querySelector('nav').style.display = 'none';
        // Lógica para "Salir"
    }

    filtro(event) {
        event.preventDefault();
        document.querySelector('nav').style.display = 'none';
        window.open('https://www.facebook.com/fbcameraeffects/testit/898010518387971/NTAxZDU3ZmVmZWQ1OTI5ZTI1MmU4YWMyOGM1Y2ZiYTM=/?source=test_link', '_blank');
        // Lógica para "Salir"
    }

    handleKeyPress(event) {
        // Verificar si la tecla presionada es "e" (código 69)
        if (event.key === 'e' || event.keyCode === 69) {
            // Mostrar nuevamente el <nav>
            document.querySelector('nav').style.display = 'flex';
            // Puedes agregar lógica adicional si es necesario
        }
    }
}

new Main();
