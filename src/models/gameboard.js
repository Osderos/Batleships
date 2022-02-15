import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.position = Array.from({ length: 100 }, (_, i) => i + 1);
    this.missedShots = [];
    this.hitShots = [];
  }
  //takes the"ghost" border of the ship and checks if it is not over the margin of the board
  checkDeployBorder(parameters, isVertical = false) {
    const borders = [
      [10, 11],
      [20, 21],
      [30, 31],
      [40, 41],
      [50, 51],
      [60, 61],
      [70, 71],
      [80, 81],
      [90, 91],
    ];
    const positionsArr = this.setShipBorder.apply(this, parameters);

    if (isVertical === true) {
      return positionsArr.some((el) => el > 100);
    } else {
      const test = borders.some((a) => {
        for (let i = 0, l = positionsArr.length - 1; i < l; i++) {
          if (a.every((v, j) => v === positionsArr[i + j])) return true;
        }
        return false;
      });
      return test;
    }
  }

  //takes the"ghost" border and checks if there is an obstacle in the way
  checkDeploySpot(parameters, shipContainer) {
    const positionsArr = this.setShipBorder.apply(this, parameters);
    if (shipContainer.length === 0) {
      return false;
    } else {
      for (let ship of shipContainer) {
        return positionsArr.some((positions) =>
          ship.position.includes(positions)
        );
      }
    }
  }

  //the ship is placed
  placeShip(index, ship, isVertical = false) {
    if (isVertical === false) {
      for (let i = 0; i < ship.length; i++) {
        ship.position.shift();
        ship.position.push(index + i);
      }
    } else if (isVertical === true) {
      for (let i = 0; i < ship.length; i++) {
        ship.position.shift();
        ship.position.push(index + i * 10);
      }
    }
  }

  //makes "ghost" border of the ship that is wanted to be placed
  setShipBorder(index, shipType, isVertical = false) {
    const positionsArr = [];
    for (let i = 0; i < shipType.length; i++) {
      if (isVertical === false) {
        positionsArr.push(index + i);
      } else if (isVertical === true) {
        positionsArr.push(index + i * 10);
      }
    }
    return positionsArr;
  }

  receiveAttack(index, shipContainer) {
    for (let ship of shipContainer) {
      if (ship.position.includes(index)) {
        ship.hit(index);
        this.hitShots.push(index)
      } else {
        this.missedShots.push(index);
      }
    }
  }

  sunkStatus(shipContainer) {
    const result = shipContainer.every(function (ship) {
      return ship.position.every((elem) => typeof elem == "string");
    });
    return result;
  }
}
