let player1 = "X";
let player2 = "O";
let gameWon = false;
let board = ["", "", "", "", "", "", "", "", ""];
let scorePlayer1 = 0;
let scorePlayer2 = 0;

// Set up event listeners for each cell
const cells = document.querySelectorAll("td");
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    // Check if the cell has already been played
    if (cell.classList.contains("X") || cell.classList.contains("O")) {
      return;
    }

    // Update the board with the current player's move
    index = cell.getAttribute("data-index");
    board[index] = player1;
    cell.classList.add(player1);

    // Check if the current player has won
    if (checkWin(player1)) {
      gameWon = true;
      scorePlayer1++;
      showResult(`${player1} wins!`);
      updateScoreboard();
      return;
    }

    // Check if the game is a tie
    if (checkTie()) {
      gameWon = true;
      showResult("It's a tie!");
      return;
    }

    // Switch to the other player
    player1 = player2;
    player2 = player1 === "O" ? "X" : "O";
    
    // Provide feedback for the player's move
    showFeedback(`Player ${player1}, it's your turn!`);
  });
});

// Check if the current player has won
function checkWin(player) {
  const winPatterns = [
    // Horizontal wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal wins
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }

  return false;
}

// Check if the game is a tie
function checkTie() {
  return board.every(cell => cell !== "");
}

// Show the game result
function showResult(result) {
  const messageElement = document.querySelector(".message");
  messageElement.innerHTML = result;
  messageElement.classList.remove("hidden");
}

// Show feedback for each player's move
function showFeedback(feedback) {
  const feedbackElement = document.querySelector(".feedback");
  feedbackElement.innerHTML = feedback;
}

// Update the scoreboard
function updateScoreboard() {
  const scoreElement1 = document.querySelector("#scorePlayer1");
  const scoreElement2 = document.querySelector("#scorePlayer2");
  scoreElement1.innerHTML = scorePlayer1;
  // Update the scoreboard
function updateScoreboard() {
  const scoreElement1 = document.querySelector("#scorePlayer1");
  const scoreElement2 = document.querySelector("#scorePlayer2");
  scoreElement1.innerHTML = scorePlayer1;
  scoreElement2.innerHTML = scorePlayer2;
}
}