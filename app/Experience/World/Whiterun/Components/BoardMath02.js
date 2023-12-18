import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class BoardMath01 {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.boardmath01 = this.resources.items.whiterun.boardmath01.scene;
        this.board_texture_math01 = this.resources.items.whiterun.board_texture_math01;
    }

    setMaterials() {
        this.board_texture_math01.flipY = false;
        this.board_texture_math01.encoding = THREE.sRGBEncoding;

        this.boardmath01.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.board_texture_math01
            });
        })

        this.scene.add(this.boardmath01);
    }
}