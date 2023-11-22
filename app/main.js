import "./main.css";
import Experience from "./Experience/Experience.js";
import Interface from "./Interface/Interface.js";

class Main {
    content = document.getElementsByClassName('router')[0];

    constructor() {
        console.log('constructor init');
        const nuevaURL = window.location.pathname;
        console.log('Cambio de ruta detectado: ' + nuevaURL);
        const menu = document.getElementsByClassName('menu-container');
        if (nuevaURL === '/') {
            this.createInterface();
            this.createExperience();

            // Agregar un event listener al botón para cerrar el menú
            const closeButton = document.querySelector(".close-button");
            if (closeButton) {
                closeButton.addEventListener("click", this.toggleMenu.bind(this));
            }

            // Agregar un event listener para la tecla "M"
            document.addEventListener("keydown", this.handleKeyPress.bind(this));
        } else {
            menu[0].style.display = 'none';
            this.loadPage('')
        }
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
    }

    toggleMenu() {
        const menuContainers = document.getElementsByClassName('menu-container');
        if (menuContainers.length > 0) {
            const menuContainer = menuContainers[0];
            menuContainer.style.display = 'none';
        }
    }

    handleKeyPress(event) {
        if (event.key === "m" || event.key === "M") {
            // Presionó la tecla "M" o "m", alternar la visibilidad del menú
            const menuContainers = document.getElementsByClassName('menu-container');
            if (menuContainers.length > 0) {
                const menuContainer = menuContainers[0];
                if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
                    menuContainer.style.display = 'block'; // Mostrar el menú
                } else {
                    menuContainer.style.display = 'none'; // Ocultar el menú
                }
            }
        }
    }

    handleButtonVideo(event) {

    }

    loadPage(route) {
        console.log(route);
        fetch(`/${route}.html`)
            .then(response => response.text())
            .then(content => {
                console.log(content);
                this.content.innerHTML = content;
            })
            .catch(error => {
                console.error(`Error cargando página: ${error}`);
            });
    }
}

new Main();
