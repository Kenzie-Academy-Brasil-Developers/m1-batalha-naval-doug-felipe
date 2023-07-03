// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/
   
function allocateShips(shipPositions, initialBoard){

  for(let i=0; i< shipPositions.length; i++){

    initialBoard[shipPositions[i][0]][shipPositions[i][1]]= "S"

  } return initialBoard
}

function checkGuesses(guesses, mountedBoard) {
  const expectedAfterGuessesBoard = [
    ["X", ".", ".", ".", "."],
    [".", "X", ".", ".", "."],
    [".", ".", "X", "X", "."],
    [".", ".", ".", ".", "."],
    ["X", ".", ".", ".", "X"],
  ];

  for (const guess of guesses) {
    const [row, col] = guess;
    if (mountedBoard[row][col] === "S") {
      mountedBoard[row][col] = "X";
    }
  }

  return mountedBoard;
}

const shipPositions = [
  [0, 0],
  [1, 1],
  [2, 2],
  [2, 3],
  [4, 0],
  [4, 4],
];

const allocatedSeaBoard = allocateShips(shipPositions);

const guessesTest = [
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
];

const updatedBoard = checkGuesses(guessesTest, allocatedSeaBoard);
console.log(updatedBoard);


function checkWinCondition(guessBoard) {
  for (let row = 0; row < guessBoard.length; row++) {
    for (let col = 0; col < guessBoard[row].length; col++) {
      if (guessBoard[row][col] === 'S') {
        return false; 
      }
    }
  }
  return true;
}
