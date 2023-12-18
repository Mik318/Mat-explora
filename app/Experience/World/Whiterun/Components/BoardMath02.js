import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class BoardMath02 {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.boardmath02 = this.resources.items.whiterun.boardmath02.scene;
        this.board_texture_math02 = this.resources.items.whiterun.board_texture_math02;
    }

    setMaterials() {
        this.board_texture_math02.flipY = false;
        this.board_texture_math02.encoding = THREE.sRGBEncoding;

        this.boardmath02.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.board_texture_math02
            });
        })

        this.scene.add(this.boardmath02);
    }
}