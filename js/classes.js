class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    color = 'magenta'
  }) {
    // TODO: Initialize the sprite's properties.
    // - this.position: The sprite's position on the canvas {x, y}.
    this.position = position;
    this.image = imageSrc ? new Image() : null;
    if (this.image) this.image.src = imageSrc;
    // - this.scale: The scale of the sprite.
    this.scale = scale;
    // - this.framesMax: The total number of frames in the sprite sheet.
    this.framesMax = framesMax;
    // - this.framesCurrent: The current frame being displayed.
    this.framesCurrent = 0;
    // - this.framesElapsed: The number of frames that have passed.
    this.framesElapsed = 0;
    // - this.framesHold: The number of frames to wait before switching to the next frame.
    this.framesHold = 10;
    // - this.offset: An offset for positioning the sprite.
    this.offset = offset;
    this.velocity = { x: 0, y: 0 }; // Ensure velocity exists for gravity
    this.color = color;
    this.width = 50;
    this.height = 150;

    if (this.image) {
      this.image.onload = () => {
        this.draw();
      };
    }
  }
  animateFrames() {
    this.framesElapsed++;
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update() {
    this.draw();
    this.animateFrames();

    // Gravity and floor collision
    const floorY = 476; // 576 (canvas height) - 100 (floor height)
    if (this.position.y + this.height < floorY) {
      this.position.y += this.velocity.y;
      this.velocity.y += 0.7; // gravity
    } else {
      this.velocity.y = 0;
      this.position.y = floorY - this.height; // stand on floor
    }

    this.position.x += this.velocity.x;
  }
  draw() {
    // Always draw colored square for fighters
    c.fillStyle = this.color || 'magenta';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
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
    attackBox = { offset: {}, width: 50, height: 50 }
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset,
      color
    });
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey = '';
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height
    };
    this.isAttacking = false;
    this.health = 100;
    this.sprites = sprites;
  }

  update() {
    super.update(); // This draws and animates the fighter
    // Add any fighter-specific logic here
  }

 
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  fighter.update();
}
animate();


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  fighter.update();
}
animate();


