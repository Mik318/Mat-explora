import Landscape from "./Components/Landscape.js";
import Items from "./Components/Items.js";
import Interactions from "./Components/Interactions.js";
import Buildings from "./Components/Buildings.js";
import Walls from "./Components/Walls.js";
import Environment from "./Components/Environment.js";
import Board from "./Components/Board.js";
import TreeChrismas from "./Components/TreeChrismas.js";
import BoardMath01 from "./Components/BoardMath01.js";
import BoardMath02 from "./Components/BoardMath02.js";
import Caballero from "./Components/Caballero.js";

export default class WhiteRun {
    constructor() {
        this.items = new Items();
        this.landscape = new Landscape();
        // this.interactions = new Interactions();
        this.buildings = new Buildings();
        this.walls = new Walls();
        this.environment = new Environment();
        this.board = new Board();
        this.boardmath01 = new BoardMath01();
        this.boardmath02 = new BoardMath02();
        this.treeChrismas = new TreeChrismas();
        this.Caballero = new Caballero();
    }

    resize() {}

    update() {}
}
