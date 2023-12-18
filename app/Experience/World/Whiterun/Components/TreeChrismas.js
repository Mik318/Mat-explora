import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class TreeChrismas {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.treeChrismas = this.resources.items.whiterun.tree.scene;
        this.treeChrismas_texture = this.resources.items.whiterun.tree_texture;
    }

    setMaterials() {
        this.treeChrismas_texture.flipY = false;
        this.treeChrismas_texture.encoding = THREE.sRGBEncoding;

        this.treeChrismas.children.find((child) => {
            if (this.treeChrismas_texture.format === THREE.RGBAFormat) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.treeChrismas_texture,
                    transparent: true,  // Permitir transparencia
                    opacity: 1,       // Ajustar la opacidad según sea necesario
                });
            } else {
                // Si la textura no tiene transparencia, utiliza un material estándar
                child.material = new THREE.MeshBasicMaterial({
                    map: this.treeChrismas_texture,
                });
            }
        })

        this.scene.add(this.treeChrismas);
    }
}