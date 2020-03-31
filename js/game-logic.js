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

function getGameWinner() { }
