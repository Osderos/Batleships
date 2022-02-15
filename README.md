# Batleships

Pseudocode:

Algorithm:
deploymentPhase:
1. new ship
2. check if the pushed ship is deployable
3. push ship in shipPool
4. deploy the ship

1. The ship model:
constructor : shipType, shipLength
 methodes: hit , isSunk

   hit(num) {
   return (this.lenght[num] = "hit");
   }

isSunk() {
return this.lenght.every((elem) => (typeof elem == "string"));
}

module : shipClasses = {
carrier : 5
battleship: 4
destroyer: 3
submarine: 3
patrolBoat: 2
}

2. The gameboard model:
   Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
   Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
   Gameboards should keep track of missed attacks so they can display them properly.
   Gameboards should be able to report whether or not all of their ships have been sunk.

constructor: position, missedShots [],
methodes: placeShip, receiveAttack,

boardConcept:
 1 , 2 , 3,  4,  5,  6,  7,  8 , 9 ,10
11, 12, 13 ,14 ,15 ,16 ,17, 18, 19 ,20
21, 22, 23, 24, 25, 26, 27, 28, 29, 30
31, 32, 33, 34, 35, 36, 37, 38, 39, 40
...

placeShip ()
- takes the numbers from board.position and puts them in the ship.Length

checkDeploySpot()
- checks if the spot is ok to deploy a ship
