// Utility functions for the game

function rectangularCollision({ rectangle1, rectangle2 }) {
  // TODO: Detect collisions between two rectangles.
  // - A collision occurs if the rectangles' sides overlap.
  // - The right side of a rectangle is at rectangle.attackBox.position.x + rectangle.attackBox.width.
  // - The left side of a rectangle is at rectangle.attackBox.position.x.
  // - The bottom side of a rectangle is at rectangle.attackBox.position.y + rectangle.attackBox.height.
  // - The top side of a rectangle is at rectangle.attackBox.position.y.
  // - Return true if a collision is detected, and false otherwise.
}

function determineWinner({ player, enemy, timerId }) {
  // TODO: Determine the winner of the game.
  // - Stop the timer using clearTimeout(timerId).
  // - Get the element with the id 'displayText'.
  // - Set its display property to 'flex'.
  // - If the player's health is equal to the enemy's health, display 'Tie'.
  // - If the player's health is greater than the enemy's health, display 'Player 1 Wins'.
  // - If the enemy's health is greater than the player's health, display 'Player 2 Wins'.
}

let timer = 60
let timerId
function decreaseTimer() {
  // TODO: Decrease the timer every second.
  // - Use setTimeout(decreaseTimer, 1000) to create a loop.
  // - Decrement the timer variable.
  // - Get the element with the id 'timer' and set its innerHTML to the new timer value.
  // - If the timer reaches 0, call the determineWinner() function.
}
