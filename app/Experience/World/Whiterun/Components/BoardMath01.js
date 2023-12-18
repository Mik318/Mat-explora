import * as THREE from "three";
import Experience from "../../../Experience.js";

export default class Board {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.init();
        this.setMaterials();
    }

    init() {
        this.board = this.resources.items.whiterun.board.scene;
        this.board_texture = this.resources.items.whiterun.board_texture;
    }

    setMaterials() {
        this.board_texture.flipY = false;
        this.board_texture.encoding = THREE.sRGBEncoding;

        this.board.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({
                map: this.board_texture
            });
        })

        this.scene.add(this.board);
    }
}