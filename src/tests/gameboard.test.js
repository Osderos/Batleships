import Gameboard from "../models/gameboard.js";
import Ship from "../models/ship.js";
import { shipClasses } from "../utils/shipClasses.js";

describe("gameboard ship placement", () => {
  let testGameboard = new Gameboard();

  let testShipPool = [];

  test("gameboard size is 100 units", () => {
    expect(testGameboard.position.length).toEqual(100);
  });
  xtest("ship positioned horizontally on the board at index 7", () => {
    testGameboard.placeShip(22, testSubmarine, false);
    expect(testSubmarine.position).toEqual([22, 23, 24]);
  });

  xtest("place a ship horizontally on the board and another one next to it", () => {
    testGameboard.placeShip(7, testSubmarine, false);
    expect(testSubmarine.position).toEqual([7, 8, 9]);
  });

  xtest("check if the ships borders are registered before deploy", () => {
    expect(testGameboard.setShipBorder(1, testSubmarine, false)).toEqual([
      1,
      2,
      3,
    ]);
    expect(testGameboard.setShipBorder(3, testSubmarine, true)).toEqual([
      3,
      13,
      23,
    ]);
  });

  xtest("check if a spot is ok for deploy when no ship is present", () => {
    expect(
      testGameboard.checkDeploySpot(1, testSubmarine, testShipPool, false)
    ).toEqual(false);
    expect(
      testGameboard.checkDeploySpot(16, testSubmarine, testShipPool, true)
    ).toEqual(false);
  });

  xtest("cheks if the first ship can be deployed", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    expect(
      testGameboard.checkDeploySpot([1, testSubmarine, false], testShipPool)
    ).toEqual(false);
  });

  xtest("check if a second ship can be deployed on the first ship", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    testShipPool.push(testSubmarine);
    testGameboard.placeShip(1, testSubmarine, false);
    expect(testShipPool[0].position).toEqual([1, 2, 3]);
    let testCarrier = new Ship("carrier", shipClasses["carrier"]);
    expect(
      testGameboard.checkDeploySpot([1, testCarrier, false], testShipPool)
    ).toEqual(true);
  });

  xtest("check if a second ship can be deployed outside the first ship", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    testShipPool.push(testSubmarine);
    testGameboard.placeShip(44, testSubmarine, false);
    let testCarrier = new Ship("carrier", shipClasses["carrier"]);
    expect(
      testGameboard.checkDeploySpot([12, testCarrier, false], testShipPool)
    ).toEqual(false);
  });

  xtest("check if a spot is ok for deploy when other ships present", () => {
    testGameboard.placeShip(7, testSubmarine, false);
    expect(
      testGameboard.checkDeploySpot(5, testCarrier, testShipPool, false)
    ).toEqual(true);
  });

  xtest("place a ship that exceeds the board margin vertically", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    expect(testGameboard.setShipBorder(90, testSubmarine, true)).toEqual([
      90,
      100,
      110,
    ]);
    expect(
      testGameboard.checkDeployBorder([90, testSubmarine, true], true)
    ).toEqual(true);
    expect(
      testGameboard.checkDeployBorder([50, testSubmarine, true], true)
    ).toEqual(false);
    expect(
      testGameboard.checkDeployBorder([20, testSubmarine, false], false)
    ).toEqual(false);
  });

  test("place a ship that exceeds the board margin horizontally", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    expect(
      testGameboard.checkDeployBorder([20, testSubmarine, false], false)
    ).toEqual(true);
    expect(
      testGameboard.checkDeployBorder([1, testSubmarine, false], false)
    ).toEqual(false);
    expect(
      testGameboard.checkDeployBorder([77, testSubmarine, false], false)
    ).toEqual(false);
    expect(
      testGameboard.checkDeployBorder([89, testSubmarine, false], false)
    ).toEqual(true);
  });

  xtest("place a ship vertically on the board", () => {
    testGameboard.placeShip(1, testSubmarine, true);
    expect(testSubmarine.position).toEqual([1, 11, 21]);
  });

  xtest("a placed submarine taking shoots and testing if is sunk", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    testShipPool.push(testSubmarine);
    testGameboard.placeShip(5, testSubmarine, false);
    testGameboard.receiveAttack(5, testShipPool);
    testGameboard.receiveAttack(6, testShipPool);
    expect(testSubmarine.position).toEqual(["hit", "hit", 7]);
    expect(testSubmarine.isSunk()).toEqual(false);
    testGameboard.receiveAttack(7, testShipPool);
    expect(testSubmarine.position).toEqual(["hit", "hit", "hit"]);
    expect(testSubmarine.isSunk()).toEqual(true);
  });

  xtest("missed shot", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    testShipPool.push(testSubmarine);
    testGameboard.placeShip(5, testSubmarine, false);
    testGameboard.receiveAttack(4, testShipPool);
    testGameboard.receiveAttack(1, testShipPool);
    expect(testSubmarine.position).toEqual([5, 6, 7]);
    expect(testGameboard.missedShots).toEqual([4, 1]);
  });

  test("sunked ships report", () => {
    let testSubmarine = new Ship("submarine", shipClasses["submarine"]);
    let testCarrier = new Ship("carrier", shipClasses["carrier"]);
    let testBattleship = new Ship("battleship", shipClasses["battleship"]);
    testShipPool.push(testSubmarine, testCarrier, testBattleship);
    testGameboard.placeShip(1, testSubmarine, false)
    testGameboard.placeShip(12, testCarrier, false)
    testGameboard.placeShip(24, testBattleship, false)
    testGameboard.receiveAttack(1, testShipPool);
    testGameboard.receiveAttack(2, testShipPool);
    testGameboard.receiveAttack(3, testShipPool);
    testGameboard.receiveAttack(12, testShipPool);
    testGameboard.receiveAttack(13, testShipPool);
    testGameboard.receiveAttack(14, testShipPool);
    testGameboard.receiveAttack(15, testShipPool);
    testGameboard.receiveAttack(16, testShipPool);
    expect(testGameboard.sunkStatus(testShipPool)).toEqual(false)
    testGameboard.receiveAttack(24, testShipPool);
    testGameboard.receiveAttack(25, testShipPool);
    testGameboard.receiveAttack(26, testShipPool);
    testGameboard.receiveAttack(27, testShipPool);
    expect(testGameboard.sunkStatus(testShipPool)).toEqual(true)
  });
});
