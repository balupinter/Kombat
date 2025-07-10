window.addEventListener('load', () => {
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')

  canvas.width = 1024
  canvas.height = 576

  c.fillRect(0, 0, canvas.width, canvas.height)

  const gravity = 0.7

  // TODO: Create two instances of the Fighter class.
  // One for the player and one for the enemy.
  // Position them on opposite sides of the screen.

  const keys = {
    a: {
      pressed: false
    },
    d: {
      pressed: false
    },
    ArrowRight: {
      pressed: false
    },
    ArrowLeft: {
      pressed: false
    }
  }

  function animate() {
    // TODO: This is the main game loop.
    // Use requestAnimationFrame to keep it running.
    // Clear the canvas, update and draw all game objects.
    // Handle player movement and attacks.
    // Check for collisions and update health.
    // Check if the game is over.
  }

  animate()

  window.addEventListener('keydown', (event) => {
    // TODO: Listen for key presses to control the fighters.
    // Map keys to actions like move left, move right, jump, and attack.
  })

  window.addEventListener('keyup', (event) => {
    // TODO: Listen for key releases to stop actions.
  })
})