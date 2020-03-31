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
      if (value < 1 || value > 99 ) {
        return false
      }
      sum += value
    }

    if (sum > 99 ){
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

function getRoundWinner() { }

function getGameWinner() { }
