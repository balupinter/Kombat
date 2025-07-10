class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 }
  }) {
    // TODO: Initialize the sprite's properties.
    // - this.position: The sprite's position on the canvas {x, y}.
    // - this.image: A new Image() object.
    // - this.image.src: The path to the sprite's image.
    // - this.scale: The scale of the sprite.
    // - this.framesMax: The total number of frames in the sprite sheet.
    // - this.framesCurrent: The current frame being displayed.
    // - this.framesElapsed: The number of frames that have passed.
    // - this.framesHold: The number of frames to wait before switching to the next frame.
    // - this.offset: An offset for positioning the sprite.
  }

  draw() {
    // TODO: Draw the sprite on the canvas.
    // - Use c.drawImage() to draw the sprite.
    // - The first argument is the image to draw.
    // - The next four arguments are for clipping the sprite sheet (sx, sy, sWidth, sHeight).
    // - The last four arguments are for positioning and scaling the sprite on the canvas (dx, dy, dWidth, dHeight).
  }

  animateFrames() {
    // TODO: Animate the sprite.
    // - Increment this.framesElapsed.
    // - If this.framesElapsed % this.framesHold === 0, then it's time to switch frames.
    // - If this.framesCurrent is less than this.framesMax - 1, increment it.
    // - Otherwise, reset this.framesCurrent to 0.
  }

  update() {
    // TODO: Update the sprite.
    // - Call this.draw() to draw the sprite.
    // - Call this.animateFrames() to animate the sprite.
  }
}

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined }
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset
    })

    // TODO: Initialize the fighter's properties.
    // - this.velocity: The fighter's velocity {x, y}.
    // - this.width: The fighter's width.
    // - this.height: The fighter's height.
    // - this.lastKey: The last key pressed by the player.
    // - this.attackBox: An object that defines the fighter's attack box.
    // - this.isAttacking: A boolean to track if the fighter is attacking.
    // - this.health: The fighter's health.
    // - this.sprites: An object that holds all of the fighter's sprites (idle, run, jump, etc.).
  }

  update() {
    // TODO: Update the fighter.
    // - Call this.draw() to draw the fighter.
    // - Update the fighter's position based on its velocity.
    // - Apply gravity to the fighter's y velocity.
    // - Prevent the fighter from falling through the bottom of the canvas.
  }

  attack() {
    // TODO: Make the fighter attack.
    // - Set this.isAttacking to true.
    // - Switch the sprite to the attack animation.
  }

  takeDamage(damage) {
    // TODO: Reduce the fighter's health.
    // - Subtract the damage from the fighter's health.
    // - If the fighter's health is less than or equal to 0, switch to the death animation.
    // - Otherwise, switch to the take hit animation.
  }

  switchSprite(sprite) {
    // TODO: Switch the fighter's sprite.
    // - Check which sprite is being requested (e.g., 'idle', 'run', 'jump').
    // - Set this.image to the corresponding sprite image.
    // - Set this.framesMax to the number of frames in the new sprite.
  }
}
