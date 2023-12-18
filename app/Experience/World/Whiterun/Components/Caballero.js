import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Caballero {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.caballero = this.resources.items.whiterun.caballero.scene;
        this.caballero_texture = this.resources.items.whiterun.caballero_texture;
    }

    setMaterials() {
        this.caballero_texture.flipY = false;
        this.caballero_texture.encoding = THREE.sRGBEncoding;

        this.caballero.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.caballero_texture
            });
        })

        this.scene.add(this.caballero);
    }
}