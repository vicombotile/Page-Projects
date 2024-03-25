$(document).on("ready", function() {
// Keep track of current player (X goes first)
let currentPlayer = "X"; 

// Keep track of cells and values
let board = ["", "", "", "", "", "", "", "", ""];

function resetBoard() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    $(".original div").text("");
}

function checkWinner() {

    // Check rows
    for(let i = 0; i < 9; i += 3) {
      if(board[i] !== "" && board[i] === board[i+1] && board[i] === board[i+2]) {
        alert(board[i] + " wins!");
        resetBoard();
        return;
      }
    }
  
    // Check columns
    for(let i = 0; i < 3; i++) {
      if(board[i] !== "" && board[i] === board[i+3] && board[i] === board[i+6]) {
        alert(board[i] + " wins!");
        resetBoard();
        return;
      }
    }
  
    // Check diagonals
    if(board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
      alert(board[0] + " wins!");
      resetBoard();
      return;
    }
    if(board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
      alert(board[2] + " wins!");
      resetBoard();
      return; 
    }
  
}

// Handle click on cell
$(".original div").click(function() {

  // Get index of cell
  let index = $(this).attr("id") - 1;

  // Check if empty
  if(board[index] === "") {

    // Set value on board
    board[index] = currentPlayer;

    // Set text on button
    $(this).text(currentPlayer);

    // Check for winner
    checkWinner();

    // Toggle player
    if(currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

  }

});




});