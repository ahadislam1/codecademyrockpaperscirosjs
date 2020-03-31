// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

function setPlayerMoves(
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) {
  let x = [
    moveOneType,
    moveOneValue,
    moveTwoType,
    moveTwoValue,
    moveThreeType,
    moveThreeValue
  ];

  let validMoveTypes = ['rock', 'paper', 'scissors']
  let values = [moveOneValue, moveTwoValue, moveThreeValue]

  function checkValues() {
    let sum = 0

    for (value of values) {
      if (value < 1 || value > 99) {
        return false
      }
      sum += value
    }

    if (sum > 99) {
      return false
    }

    return true
  }


  const checkMoveValid = moveType => validMoveTypes.includes(moveType)

  if (!x.includes(undefined) && checkMoveValid(moveOneType) && checkMoveValid(moveTwoType) && checkMoveValid(moveThreeType) && checkValues()) {
    if (player === "Player One") {
      playerOneMoveOneType = moveOneType;
      playerOneMoveOneValue = moveOneValue;

      playerOneMoveTwoType = moveTwoType;
      playerOneMoveTwoValue = moveTwoValue;

      playerOneMoveThreeType = moveThreeType;
      playerOneMoveThreeValue = moveThreeValue;
    } else if (player === "Player Two") {
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveOneValue = moveOneValue;

      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveTwoValue = moveTwoValue;

      playerTwoMoveThreeType = moveThreeType;
      playerTwoMoveThreeValue = moveThreeValue;
    }
  }
}

function checkMove(moveOne, moveOneValue, moveTwo, moveTwoValue) {
  let x = [moveOne, moveOneValue, moveTwo, moveTwoValue]

  if (!x.includes(undefined)) {
    if ((moveOne === 'rock' && moveTwo === 'scissors') ||
      (moveOne === 'scissors' && moveTwo === 'paper') ||
      (moveOne === 'paper' && moveTwo === 'rock')) {
      return 'Player One'
    } else if (moveOne === moveTwo) {
      if (moveOneValue > moveTwoValue) {
        return 'Player One'
      } else if (moveOneValue === moveTwoValue) {
        return 'Tie'
      } else {
        return 'Player Two'
      }
    } else {
      return 'Player Two'
    }
  } else {
    return null
  }
}

const getRoundWinner = number => {
  if (number === 1) {
    return checkMove(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue)
  } else if (number === 2) {
    return checkMove(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue)
  } else if (number === 3) {
    return checkMove(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue)
  } else {
    return null
  }
}

const getGameWinner = () => {
  let playerOne = 0
  let playerTwo = 0


  for (let n = 1; n < 4; n++) {
    if (getRoundWinner(n) === null) {
      return null
    } else if (getRoundWinner(n) === 'Player One') {
      playerOne++
    } else if (getRoundWinner(n) === 'Player Two') {
      playerTwo++
    }
  }

  if (playerOne > playerTwo) {
    return 'Player One'
  } else if (playerOne < playerTwo) {
    return 'Player Two'
  } else {
    return 'Tie'
  }
}


const setComputerMoves = () => {
  let moves = ['rock', 'scissors', 'paper']
  const oneValue = Math.floor(Math.random() * 97) + 1
  const twoValue = Math.floor(Math.random() * (98 - oneValue)) + 1
  const threeValue = 99 - oneValue - twoValue
  playerTwoMoveOneType = moves[Math.floor(Math.random() * moves.length)]
  playerTwoMoveTwoType = moves[Math.floor(Math.random() * moves.length)]
  playerTwoMoveThreeType = moves[Math.floor(Math.random() * moves.length)]

  playerTwoMoveOneValue = oneValue
  playerTwoMoveTwoValue = twoValue
  playerTwoMoveThreeValue = threeValue

}