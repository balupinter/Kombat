window.addEventListener('load', () => {
  const canvas = document.getElementById('gameCanvas');
  const c = canvas.getContext('2d');
  canvas.width = 1024;
  canvas.height = 576;

  // Player state
  const floorHeight = 70;
  const playerWidth =100;
  const playerHeight = 200;
  const floorY = canvas.height - floorHeight;

  // Character model definitions for left player
  const leftCharacters = [
    {
      color: 'red',
      imgSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmortalkombatwarehouse.com%2Fmk2%2Fraiden%2Fsprites%2Fstance%2Fa1.gif&f=1&nofb=1&ipt=00772dbd0fa8509e4e0f2191f54128ccf322dcc44d59631ef868933a6961e672',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/special/204.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/punch/u05.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/beinghit/s02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/duckjump/f01.png'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/stance/07.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/throw/02.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/punch/u04.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/beinghit/h02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/duckjump/j06.png'
    },
    {
      color: 'blue',
      imgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/stance/01.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/combos/12.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/kick/12.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/beinghit/s02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/duckjump/f01.png'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/umk3/kitana/sprites/stance/02.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/kitana/sprites/special/310.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/kitana/sprites/punch/12.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/kitana/sprites/beinghit/s07.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/kitana/sprites/duckjump/f01.png'
    },
    {
      color: 'red',
      imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2F8%2F8e%2FKayn_Render.png%2Frevision%2Flatest%3Fcb%3D20181117175535&f=1&nofb=1&ipt=7aaf2100ef2f24f552244852a70a4c48e8e2bc3cab95fed38de2d6e67aafd51f',
      shootImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7a%2Fd7%2F81%2F7ad781666e10031bfd48222054e49ac5.png&f=1&nofb=1&ipt=da31f765d4c7fac36ed0a4ffeb02bc005e26f6593ba4e85407288ff28bdb9d77',
      punchImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwiki.leagueoflegends.com%2Fen-us%2Fimages%2FKayn_Rhaast_Render.png%3F3dff1&f=1&nofb=1&ipt=2073973f92c68cb192b46380c99933d52c18fd6d29de6c14644d921c14f3f8e7',
      stunImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.V8kt1f_VtxDHEZJrYZlgRAHaJU%3Fpid%3DApi&f=1&ipt=a7a1d52b8cf790b6046556d26e49598d751520b5548df1108ce4c43b2a87edcd&ipo=images',
      jumpImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvillains%2Fimages%2Fc%2Fc5%2FRhaast_Scythe_Render.png%2Frevision%2Flatest%2Fscale-to-width-down%2F310%3Fcb%3D20200712115124&f=1&nofb=1&ipt=a61a37f16eac71db308f349120ec716822550a45f19568102afae629d2162c8f'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mk3/motaro/sprites/stance/01.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/motaro/sprites/special/204.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/motaro/sprites/special/306.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/motaro/sprites/fall/05.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/motaro/sprites/kick/05.png'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mk3/jax/sprites/stance/a1.gif',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/jax/sprites/finishers/f107.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/jax/sprites/kick/06.gif',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/jax/sprites/block/03.gif',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/jax/sprites/duckjump/f03.gif'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mk3/kabal/sprites/finishers/f218.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/kabal/sprites/finishers/f224.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/kabal/sprites/special/302.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/kabal/sprites/finishers/f214.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/kabal/sprites/finishers/f205.png'
    },
    

  ];

  // Character model definitions for right player
  const rightCharacters = [
    {
      color: 'blue',
      imgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/stance/01.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/combos/12.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/kick/12.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/beinghit/s02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/umk3/scorpion/sprites/duckjump/f01.png'
    },
    {
      color: 'purple',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mk2/shaokahn/sprites/stance/01.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/shaokahn/sprites/fall/f03.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/shaokahn/sprites/punch/04.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/shaokahn/sprites/beinghit/s02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/shaokahn/sprites/victory/101.png'
    },
    {
      color: 'red',
      imgSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmortalkombatwarehouse.com%2Fmk2%2Fraiden%2Fsprites%2Fstance%2Fa1.gif&f=1&nofb=1&ipt=00772dbd0fa8509e4e0f2191f54128ccf322dcc44d59631ef868933a6961e672',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/special/204.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/punch/u05.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/beinghit/s02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/raiden/sprites/duckjump/f01.png'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/stance/07.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/throw/02.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/punch/u04.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/beinghit/h02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk2/kintaro/sprites/duckjump/j06.png'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mkt/johnnycage/sprites/stance/t01.png',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mkt/johnnycage/sprites/duckjump/f08.png',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mkt/johnnycage/sprites/punch/u05.png',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mkt/johnnycage/sprites/beinghit/s02.png',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mkt/johnnycage/sprites/kick/s08.png'
    },
    {
      color: 'green',
      imgSrc: 'https://www.mortalkombatwarehouse.com/mk3/sektor/sprites/stance/t01.gif',
      shootImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/sektor/sprites/duckjump/d02.gif',
      punchImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/sektor/sprites/punch/10.gif',
      stunImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/sektor/sprites/kick/a01.gif',
      jumpImgSrc: 'https://www.mortalkombatwarehouse.com/mk3/sektor/sprites/combos/09.gif'
    },
    {
      color: 'blue',
      imgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.1IYRacTxC0q1jG8U6NGlDgHaE7%3Fpid%3DApi&f=1&ipt=9f8314ad673744031484728c086e5ad6b158f796c2d2d0406c09505d42029224&ipo=images',
      shootImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.fAzJlY2YhEAzOatqU4u_jAAAAA%3Fpid%3DApi&f=1&ipt=6ecf267aea4210f104eff4f14e75541b7d895862f78ded46242f7cac4a6a0b57&ipo=images',
      punchImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.DWzFJKx0WyIJTuOqJ404LwHaEK%3Fpid%3DApi&f=1&ipt=11de5535294ae7320a4d72d8df6f2e639e653fb5e8781e141d894ef7f3ea1d32&ipo=images',
      stunImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.tskPuSaj4xgikXKzDvZemAHaFj%3Fpid%3DApi&f=1&ipt=f8ca6a1674501974b327f7f5c893fa91c054f9b8a3c76677068129ffefcf82fb&ipo=images',
      jumpImgSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.b-9n17Ps4fgbdetEJ6pLOgAAAA%3Fpid%3DApi&f=1&ipt=c54f4504af977962bd945e83105f4a8de08dc93b1bf3bf2811c20652b89af78b&ipo=images'
    },

  ];

  let leftCharIdx = 0;
  let rightCharIdx = 0;

  // Helper to create a player object from a character definition
  function createPlayer(base, charDef) {
    return {
      ...base,
      color: charDef.color,
      img: (() => { const i = new Image(); i.src = charDef.imgSrc; return i; })(),
      shootImg: (() => { const i = new Image(); i.src = charDef.shootImgSrc; return i; })(),
      punchImg: (() => { const i = new Image(); i.src = charDef.punchImgSrc; return i; })(),
      stunImg: (() => { const i = new Image(); i.src = charDef.stunImgSrc; return i; })(),
      jumpImg: (() => { const i = new Image(); i.src = charDef.jumpImgSrc; return i; })()
    };
  }

  // Initial player state (excluding images)
  const baseLeftPlayer = {
    x: 100,
    y: 0, // will be set below
    vx: 0,
    vy: 0,
    health: 100,
    lastShot: 0,
    shooting: false,
    shootTimeout: null,
    punchTimeout: null,
    punching: false,
    stunTimeout: null,
    stunned: false
  };
  const baseRightPlayer = {
    x: 0, // will be set below
    y: 0, // will be set below
    vx: 0,
    vy: 0,
    health: 100,
    lastShot: 0,
    shooting: false,
    shootTimeout: null,
    punchTimeout: null,
    punching: false,
    stunTimeout: null,
    stunned: false
  };

  // Create initial players
  let leftPlayer = createPlayer(
    { ...baseLeftPlayer, y: canvas.height - floorHeight - playerHeight },
    leftCharacters[leftCharIdx]
  );
  let rightPlayer = createPlayer(
    { ...baseRightPlayer, x: canvas.width - 100 - playerWidth, y: canvas.height - floorHeight - playerHeight },
    rightCharacters[rightCharIdx]
  );

  const bullets = [];
  let winner = null;

  // Background images for three levels
  const backgroundImgs = [
    (() => {
      const img = new Image();
      img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F8a%2F7c%2F17%2F8a7c17992b93732b554bae1ec5429bb7.jpg&f=1&nofb=1&ipt=ebca902249e93063b051c9a1a0c1e6ff299eb0ef56e6a02b63a78fac821b2857';
      return img;
    })(),
    (() => {
      const img = new Image();
      img.src = 'https://www.mortalkombatwarehouse.com/mkda/arenas/houseofpekara.png';
      return img;
    })(),
    (() => {
      const img = new Image();
      img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fnub-news-files%2Fnub-news-file-storage%2F573310%2Fconversions%2FBkDBGPjIn1GG0b6gLoEwQg13nrixLY-metadGVtcEltYWdlbjdBeWRiLnBuZw%253D%253D--article.jpg&f=1&nofb=1&ipt=8ebb99e5e002a2d568cded2305c1c6eac367b63d008eafadc5d12824c540f7d6';
      return img;
    })(),
    (() => {
      const img = new Image();
      img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1215634165441480&f=1&nofb=1&ipt=53d183b23ff28a9d2b13b9b4744721ac64a10aa3a2739f9682a9738db39d346e';
      return img;
    })(),
    (() => {
      const img = new Image();
      img.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gettyimages.com%2Fid%2F2155303516%2Fphoto%2Fgrosvenor-shopping-centre-on-30th-may-2024-in-macclesfield-united-kingdom-macclesfield-is-a.jpg%3Fs%3D612x612%26w%3Dgi%26k%3D20%26c%3DEayRHbiLfgw1oQbNSHPWyAlWK2CCvrisQe6KYJ29olE%3D&f=1&nofb=1&ipt=8143794acb945e12cd289821647bd0d940ea7f338adc17e4cdfdc87e54d87ed5';
      return img;
    })()
  ];
  let currentLevel = 0;

  function drawHealthBars() {
    // Left player (blue bar, left side)
    c.fillStyle = 'black';
    c.fillRect(30, 30, 200, 20);
    c.fillStyle = 'blue';
    c.fillRect(30, 30, 2 * leftPlayer.health, 20);

    // Right player (red bar, right side)
    c.fillStyle = 'black';
    c.fillRect(canvas.width - 230, 30, 200, 20);
    c.fillStyle = 'red';
    c.fillRect(canvas.width - 230, 30, 2 * rightPlayer.health, 20);
  }

  function drawScene() {
    // Draw background image for current level if loaded, else fallback to grey
    const backgroundImg = backgroundImgs[currentLevel];
    if (backgroundImg.complete && backgroundImg.naturalWidth !== 0) {
      c.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    } else {
      c.fillStyle = 'grey';
      c.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Left player
    let leftImg = leftPlayer.img;
    if (leftPlayer.stunned && leftPlayer.stunImg.complete) {
      leftImg = leftPlayer.stunImg;
    } else if (leftPlayer.punching && leftPlayer.punchImg.complete) {
      leftImg = leftPlayer.punchImg;
    } else if (leftPlayer.shooting && leftPlayer.shootImg.complete) {
      leftImg = leftPlayer.shootImg;
    } else if (leftPlayer.y + playerHeight < floorY && leftPlayer.jumpImg.complete) {
      // Use jump frame if in the air
      leftImg = leftPlayer.jumpImg;
    }
    if (leftImg && leftImg.complete) {
      c.drawImage(leftImg, leftPlayer.x, leftPlayer.y, playerWidth, playerHeight);
    } else {
      c.fillStyle = leftPlayer.color;
      c.fillRect(leftPlayer.x, leftPlayer.y, playerWidth, playerHeight);
    }

    // Right player (flipped horizontally)
    let rightImg = rightPlayer.img;
    if (rightPlayer.stunned && rightPlayer.stunImg.complete) {
      rightImg = rightPlayer.stunImg;
    } else if (rightPlayer.punching && rightPlayer.punchImg.complete) {
      rightImg = rightPlayer.punchImg;
    } else if (rightPlayer.shooting && rightPlayer.shootImg.complete) {
      rightImg = rightPlayer.shootImg;
    } else if (rightPlayer.y + playerHeight < floorY && rightPlayer.jumpImg.complete) {
      // Use jump frame if in the air
      rightImg = rightPlayer.jumpImg;
    }
    if (rightImg && rightImg.complete) {
      c.save();
      // Translate to the right edge of the player, then flip
      c.translate(rightPlayer.x + playerWidth / 2, 0);
      c.scale(-1, 1);
      // Draw image with its center at (0, y)
      c.drawImage(
        rightImg,
        -playerWidth / 2,
        rightPlayer.y,
        playerWidth,
        playerHeight
      );
      c.restore();
    } else {
      c.save();
      c.translate(rightPlayer.x + playerWidth / 2, 0);
      c.scale(-1, 1);
      c.fillStyle = rightPlayer.color;
      c.fillRect(
        -playerWidth / 2,
        rightPlayer.y,
        playerWidth,
        playerHeight
      );
      c.restore();
    }

    // Draw bullets
    bullets.forEach(bullet => {
      c.fillStyle = bullet.owner === 'left' ? 'turquoise' : 'gold';
      c.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    drawHealthBars();

    // Announce winner if game over
    if (winner) {
      c.fillStyle = 'white';
      c.font = '48px Arial';
      c.textAlign = 'center';
      c.fillText(winner + ' is dead', canvas.width / 2, canvas.height / 2);
    }
  }

  function isColliding(a, b) {
    return (
      a.x < b.x + playerWidth &&
      a.x + playerWidth > b.x &&
      a.y < b.y + playerHeight &&
      a.y + playerHeight > b.y
    );
  }

  function isBulletColliding(bullet, player) {
    return (
      bullet.x < player.x + playerWidth &&
      bullet.x + bullet.width > player.x &&
      bullet.y < player.y + playerHeight &&
      bullet.y + bullet.height > player.y
    );
  }

  function isRectColliding(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  function updatePlayer(player, otherPlayer) {
    if (player.stunned) return; // Don't update if stunned

    // Predict next position for collision
    let nextX = player.x + player.vx;
    let nextY = player.y + player.vy;
    let tempPlayer = { x: nextX, y: nextY };

    // Only apply horizontal movement if not colliding
    if (!isColliding(
      { x: nextX, y: player.y }, // only horizontal movement
      { x: otherPlayer.x, y: otherPlayer.y }
    )) {
      player.x = nextX;
    }

    // Gravity
    player.vy += 0.7;
    player.y += player.vy;

    // Only apply vertical movement if not colliding
    if (isColliding(
      { x: player.x, y: player.y },
      { x: otherPlayer.x, y: otherPlayer.y }
    )) {
      // Undo vertical movement if colliding
      player.y -= player.vy;
      player.vy = 0;
    }

    // Floor collision
    if (player.y + playerHeight > floorY) {
      player.y = floorY - playerHeight;
      player.vy = 0;
    }
    // Prevent going off screen horizontally
    if (player.x < 0) player.x = 0;
    if (player.x + playerWidth > canvas.width) player.x = canvas.width - playerWidth;
  }

  function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i];
      bullet.x += bullet.vx;

      // Bullet collision with enemy
      if (bullet.owner === 'left') {
        if (isBulletColliding(bullet, rightPlayer)) {
          rightPlayer.health -= 10;
          if (rightPlayer.health < 0) rightPlayer.health = 0;
          bullets.splice(i, 1);
          continue;
        }
      } else if (bullet.owner === 'right') {
        if (isBulletColliding(bullet, leftPlayer)) {
          leftPlayer.health -= 10;
          if (leftPlayer.health < 0) leftPlayer.health = 0;
          bullets.splice(i, 1);
          continue;
        }
      }

      // Remove bullet if out of canvas
      if (bullet.x < 0 || bullet.x > canvas.width) {
        bullets.splice(i, 1);
      }
    }
  }

  function checkWinner() {
    if (!winner) {
      if (leftPlayer.health <= 0) {
        winner = 'Blue';
      } else if (rightPlayer.health <= 0) {
        winner = 'Red';
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!winner) {
      updatePlayer(leftPlayer, rightPlayer);
      updatePlayer(rightPlayer, leftPlayer);
      updateBullets();
      checkWinner();
    }
    drawScene();
  }
  animate();

  window.addEventListener('keydown', (event) => {
    if (winner) return;
    const now = Date.now();

    // Left player (WASD)
    if (!leftPlayer.stunned) {
      if (event.key === 'a') leftPlayer.vx = -5;
      if (event.key === 'd') leftPlayer.vx = 5;
      if (event.key === 'w' && leftPlayer.vy === 0) leftPlayer.vy = -18;
      // Left player shoot (E) with cooldown
      if (event.key === 'e') {
        if (now - leftPlayer.lastShot > 1000) {
          bullets.push({
            x: leftPlayer.x + playerWidth,
            y: leftPlayer.y + playerHeight / 2 - 5,
            vx: 8,
            width: 10,
            height: 10,
            owner: 'left'
          });
          leftPlayer.lastShot = now;
          // Shooting animation
          leftPlayer.shooting = true;
          if (leftPlayer.shootTimeout) clearTimeout(leftPlayer.shootTimeout);
          leftPlayer.shootTimeout = setTimeout(() => {
            leftPlayer.shooting = false;
          }, 250);
        }
      }
      // Left player punch (Q) with 0.75s cooldown
      if (event.key === 'q') {
        if (!leftPlayer.punching && !leftPlayer.shooting && !winner) {
          leftPlayer.punching = true;
          if (leftPlayer.punchTimeout) clearTimeout(leftPlayer.punchTimeout);
          leftPlayer.punchTimeout = setTimeout(() => {
            leftPlayer.punching = false;
          }, 750);
          // Punch bar in front of left player (half width)
          const punchBar = {
            x: leftPlayer.x + playerWidth,
            y: leftPlayer.y,
            width: playerWidth / 2,
            height: playerHeight
          };
          // If facing right and close enough
          if (isRectColliding(punchBar, {
            x: rightPlayer.x,
            y: rightPlayer.y,
            width: playerWidth,
            height: playerHeight
          })) {
            rightPlayer.health -= 20;
            if (rightPlayer.health < 0) rightPlayer.health = 0;
            // Stun right player
            if (!rightPlayer.stunned) {
              rightPlayer.stunned = true;
              if (rightPlayer.stunTimeout) clearTimeout(rightPlayer.stunTimeout);
              rightPlayer.stunTimeout = setTimeout(() => {
                rightPlayer.stunned = false;
              }, 500);
            }
          }
        }
      }
    }

    // Right player (Arrow keys)
    if (!rightPlayer.stunned) {
      if (event.key === 'ArrowLeft') rightPlayer.vx = -5;
      if (event.key === 'ArrowRight') rightPlayer.vx = 5;
      if (event.key === 'ArrowUp' && rightPlayer.vy === 0) rightPlayer.vy = -18;
      // Right player shoot (Enter) with cooldown
      if (event.key === ',') {
        if (now - rightPlayer.lastShot > 1000) {
          bullets.push({
            x: rightPlayer.x - 10,
            y: rightPlayer.y + playerHeight / 2 - 5,
            vx: -8,
            width: 10,
            height: 10,
            owner: 'right'
          });
          rightPlayer.lastShot = now;
          // Shooting animation
          rightPlayer.shooting = true;
          if (rightPlayer.shootTimeout) clearTimeout(rightPlayer.shootTimeout);
          rightPlayer.shootTimeout = setTimeout(() => {
            rightPlayer.shooting = false;
          }, 250);
        }
      }
      // Right player punch (#) with 0.75s cooldown
      if (event.key === '.') {
        if (!rightPlayer.punching && !rightPlayer.shooting && !winner) {
          rightPlayer.punching = true;
          if (rightPlayer.punchTimeout) clearTimeout(rightPlayer.punchTimeout);
          rightPlayer.punchTimeout = setTimeout(() => {
            rightPlayer.punching = false;
          }, 750);
          // Punch bar in front of right player (to the left, half width)
          const punchBar = {
            x: rightPlayer.x - playerWidth / 2,
            y: rightPlayer.y,
            width: playerWidth / 2,
            height: playerHeight
          };
          if (isRectColliding(punchBar, {
            x: leftPlayer.x,
            y: leftPlayer.y,
            width: playerWidth,
            height: playerHeight
          })) {
            leftPlayer.health -= 20;
            if (leftPlayer.health < 0) leftPlayer.health = 0;
            // Stun left player
            if (!leftPlayer.stunned) {
              leftPlayer.stunned = true;
              if (leftPlayer.stunTimeout) clearTimeout(leftPlayer.stunTimeout);
              leftPlayer.stunTimeout = setTimeout(() => {
                leftPlayer.stunned = false;
              }, 500);
            }
          }
        }
      }
    }
  });

  window.addEventListener('keyup', (event) => {
    if (winner) return;
    // Left player (WASD)
    if (!leftPlayer.stunned) {
      if (event.key === 'a' && leftPlayer.vx < 0) leftPlayer.vx = 0;
      if (event.key === 'd' && leftPlayer.vx > 0) leftPlayer.vx = 0;
    }
    // Right player (Arrow keys)
    if (!rightPlayer.stunned) {
      if (event.key === 'ArrowLeft' && rightPlayer.vx < 0) rightPlayer.vx = 0;
      if (event.key === 'ArrowRight' && rightPlayer.vx > 0) rightPlayer.vx = 0;
    }
  });

  // Level selection buttons logic
  const levelButtons = document.querySelectorAll('.level-buttons button');
  function setActiveLevel(levelIdx) {
    currentLevel = levelIdx;
    levelButtons.forEach((btn, idx) => {
      if (idx === levelIdx) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }
  levelButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => setActiveLevel(idx));
  });
  // Set initial active button
  setActiveLevel(0);

  // --- Character selection buttons ---
  // Create and insert buttons below level buttons
  const levelButtonsDiv = document.querySelector('.level-buttons');
  const charButtonsDiv = document.createElement('div');
  charButtonsDiv.className = 'character-buttons';
  charButtonsDiv.style.marginTop = '16px';
  charButtonsDiv.style.display = 'flex';
  charButtonsDiv.style.gap = '16px';

  // Helper to update only the images and color of a player object
  function updatePlayerImages(player, charDef) {
    player.color = charDef.color;
    player.img = new Image();
    player.img.src = charDef.imgSrc;
    player.shootImg = new Image();
    player.shootImg.src = charDef.shootImgSrc;
    player.punchImg = new Image();
    player.punchImg.src = charDef.punchImgSrc;
    player.stunImg = new Image();
    player.stunImg.src = charDef.stunImgSrc;
    player.jumpImg = new Image();
    player.jumpImg.src = charDef.jumpImgSrc;
  }

  // Left player cycle button
  const leftBtn = document.createElement('button');
  leftBtn.textContent = 'Cycle Left Character';
  leftBtn.onclick = () => {
    leftCharIdx = (leftCharIdx + 1) % leftCharacters.length;
    updatePlayerImages(leftPlayer, leftCharacters[leftCharIdx]);
  };
  charButtonsDiv.appendChild(leftBtn);

  // Right player cycle button
  const rightBtn = document.createElement('button');
  rightBtn.textContent = 'Cycle Right Character';
  rightBtn.onclick = () => {
    rightCharIdx = (rightCharIdx + 1) % rightCharacters.length;
    updatePlayerImages(rightPlayer, rightCharacters[rightCharIdx]);
  };
  charButtonsDiv.appendChild(rightBtn);

  // Insert after level buttons
  if (levelButtonsDiv && levelButtonsDiv.parentNode) {
    levelButtonsDiv.parentNode.insertBefore(charButtonsDiv, levelButtonsDiv.nextSibling);
  }

});