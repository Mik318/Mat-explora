import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class BoardMath04 {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.boardmath04 = this.resources.items.whiterun.boardmath04.scene;
        this.board_texture_math04 = this.resources.items.whiterun.board_texture_math04;
    }

    setMaterials() {
        this.board_texture_math04.flipY = false;
        this.board_texture_math04.encoding = THREE.sRGBEncoding;

        this.boardmath04.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.board_texture_math04
            });
        })

        this.scene.add(this.boardmath04);
    }
}