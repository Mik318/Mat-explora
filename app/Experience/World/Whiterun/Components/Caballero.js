import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import Experience from "../../../Experience.js";

export default class Caballero {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.mixer = null; // Animación Mixer
        this.clock = new THREE.Clock();

        this.init();
        this.setMaterials();
        // this.loadAnimations();
    }

    init() {
        this.caballero = this.resources.items.whiterun.caballero.scene;
        this.caballero_texture = this.resources.items.whiterun.caballero_texture;
    }

    setMaterials() {
        this.caballero_texture.flipY = false;
        this.caballero_texture.encoding = THREE.sRGBEncoding;

        this.caballero.children.forEach((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.caballero_texture
            });
        })

        this.scene.add(this.caballero);
    }

    loadAnimations() {
        const loader = new FBXLoader();

        loader.load('../../../../zombie/mremireh_o_desbiens.fbx', (fbx) => {
            fbx.scale.setScalar(0.1);
            fbx.traverse(c => {
                c.castShadow = true;
            });

            loader.load('../../../../zombie/dance.fbx', (animate) => {
                this.mixer = new THREE.AnimationMixer(fbx);
                // Obtén la acción de la primera animación disponible
                const action = this.mixer.clipAction(animate.animations[0]);
    
                // Reproduce la animación
                action.play();
            });


            // Añade el modelo animado a la escena
            this.scene.add(fbx);
        });
    }

    animate() {
        const delta = this.clock.getDelta();
        if (this.mixer) {
            this.mixer.update(delta);
        }

        // ... otras actualizaciones o animaciones ...

        // this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}
