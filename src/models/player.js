import Gameboard from "./gameboard.js";

export default class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.board = new Gameboard();
  }
}
