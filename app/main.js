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
    }
}

new Main();
