import { shipClasses } from "../utils/shipClasses.js";

export default class Ship {
  constructor(type, length) {
    this.type = type;
    this.length = length;
    this.position = Array.from(Array(length).keys())
  }

  hit(num) {
    let arrIndex = this.position.indexOf(num)
    return (this.position[arrIndex] = "hit");
  }

  isSunk() {
    return this.position.every((elem) => typeof elem == "string");
  }
}
