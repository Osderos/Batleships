import Ship from '../models/ship.js'
import {shipClasses} from '../utils/shipClasses.js'

describe('Ship functions', ()=>{
  let testCarrier = new Ship ( 'carrier', shipClasses['carrier'])
  let testSubmarine = new Ship ('submarine', shipClasses['submarine'])
  test('new ships', () =>{
    expect(testCarrier).toEqual({
      type : 'carrier',
      length : 5,
      position : [0,1,2,3,4]
    })
    expect(testSubmarine).toEqual({
      type : 'submarine',
      length : 3,
      position: [0,1,2]
    })
  })

  test('submarine length of 3', () =>{
    expect(testSubmarine.length).toEqual(3)
  })

  test('Carrier is hit but not sunk',() =>{
    testCarrier.hit(0)
    testCarrier.hit(1)
    expect(testCarrier.position).toEqual(['hit','hit',2,3,4])
    expect(testCarrier.isSunk()).toEqual(false)
  })
  test('Submarine is hit 3 times and is sunk',() =>{
    testSubmarine.hit(0)
    testSubmarine.hit(1)
    testSubmarine.hit(2)
    expect(testSubmarine.position).toEqual(['hit','hit','hit'])
    expect(testSubmarine.isSunk()).toEqual(true)
  })
})
