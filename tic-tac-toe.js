let cells = document.querySelectorAll("td");
let resetButton = document.querySelector("#reset-button");
let currentPlayer = "X";
let gameOver = false;

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent === "" && !gameOver) {
      this.textContent = currentPlayer;
      checkForWin();
      checkForTie();
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    }
  });
}

resetButton.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  gameOver = false;
});

function checkForWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    let combination = winningCombinations[i];
    let a = cells[combination[0]].textContent;
    let b = cells[combination[1]].textContent;
    let c = cells[combination[2]].textContent;
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      gameOver = true;
      alert(a + " wins!");
    }
  }
}

function checkForTie() {
  let emptyCells = 0;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      emptyCells++;
    }
  }
  if (emptyCells === 0 && !gameOver) {
    gameOver = true;
    alert("It's a tie!");
  }
}
