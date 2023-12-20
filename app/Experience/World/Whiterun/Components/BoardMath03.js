import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class BoardMath03 {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.boardmath03 = this.resources.items.whiterun.boardmath03.scene;
        this.board_texture_math03 = this.resources.items.whiterun.board_texture_math03;
    }

    setMaterials() {
        this.board_texture_math03.flipY = false;
        this.board_texture_math03.encoding = THREE.sRGBEncoding;

        this.boardmath03.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.board_texture_math03
            });
        })

        this.scene.add(this.boardmath03);
    }
}