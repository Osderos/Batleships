import Ship from '../models/ship.js'
import Gameboard from '../models/gameboard.js'
import {shipClasses} from '../utils/shipClasses.js'

let testSubmarine = new Ship ('submarine', shipClasses['submarine'])

testGameboard.checkDeployBorder([20, testSubmarine, false],false)
