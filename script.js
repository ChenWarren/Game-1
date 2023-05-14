/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_HEIGHT = canvas.height = 1000;
const CANVAS_WIDTH = canvas.width = 500;
const numberOfEnemies = 2;
let enemiesArray = [];
let gameFrame = 0;

class Enemy {
  constructor(){
    this.image = new Image();
    this.image.src = 'enemy1.png';
    this.speedX = Math.random() * 4 - 2; 
    this.speedY = Math.random() * 4 - 2; 
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = Math.random() * (CANVAS_WIDTH - this.width);
    this.y = Math.random() * (CANVAS_HEIGHT - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  update(){
    this.x += this.speedX + (Math.random() * 6 -3);
    this.y += this.speedY + (Math.random() * 6 -3);
    if( gameFrame % this.flapSpeed === 0 ) {
      this.frame > 4 ? this.frame = 0 : this.frame++;
    }
  }

  draw(){
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight, 
      this.x, 
      this.y, 
      this.width, 
      this.height
      );
  }
}

class Enemy2 {
  constructor(){
    this.image = new Image();
    this.image.src = 'enemy2.png';
    this.angle = Math.random() * 6.28;
    this.angleSpeed = Math.random() * 0.2;
    this.speedX = Math.random() * 4 + 1; 
    this.speedY = Math.random() * 4 - 2; 
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = Math.random() * (CANVAS_WIDTH - this.width);
    this.y = Math.random() * (CANVAS_HEIGHT - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.curve = Math.random() * 7;
  }

  update(){
    this.x -= this.speedX;
    this.y += Math.sin(this.angle) * this.curve;
    this.angle += this.angleSpeed;
    if( (this.x + this.width < 0)) this.x = CANVAS_WIDTH;
    if( gameFrame % this.flapSpeed === 0 ) {
      this.frame > 4 ? this.frame = 0 : this.frame++;
    }
  }

  draw(){
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight, 
      this.x, 
      this.y, 
      this.width, 
      this.height
      );
  }
}

class Enemy3 {
  constructor(){
    this.image = new Image();
    this.image.src = 'enemy3.png';
    this.angle = Math.random() * 6.28;
    this.angleSpeed = Math.random() * 1.5;
    this.speedX = Math.random() * 4 + 1; 
    this.speedY = Math.random() * 4 - 2; 
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = Math.random() * (CANVAS_WIDTH - this.width);
    this.y = Math.random() * (CANVAS_HEIGHT - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.curve = Math.random() * 200 + 50;
  }

  update(){
    this.x = Math.sin(this.angle * Math.PI/90) * CANVAS_HEIGHT/2 + (CANVAS_WIDTH/2 - this.width/2);
    this.y = Math.cos(this.angle * Math.PI/270) * CANVAS_WIDTH/2 + (CANVAS_WIDTH/2 - this.width/2);
    this.angle += this.angleSpeed;
    if( (this.x + this.width < 0)) this.x = CANVAS_WIDTH;
    if( gameFrame % this.flapSpeed === 0 ) {
      this.frame > 4 ? this.frame = 0 : this.frame++;
    }
  }

  draw(){
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight, 
      this.x, 
      this.y, 
      this.width, 
      this.height
      );
  }
}

class Enemy4 {
  constructor(){
    this.image = new Image();
    this.image.src = 'enemy4.png';
    this.speedX = Math.random() * 4 + 1; 
    this.speedY = Math.random() * 4 - 2; 
    this.spriteWidth = 213;
    this.spriteHeight = 212;
    this.width = this.spriteWidth * 0.5;
    this.height = this.spriteHeight * 0.5;
    this.x = Math.random() * (CANVAS_WIDTH - this.width);
    this.y = Math.random() * (CANVAS_HEIGHT - this.height);
    this.newX = Math.random() * (CANVAS_WIDTH - this.width);
    this.newY = Math.random() * (CANVAS_HEIGHT - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  update(){
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    if(gameFrame % this.interval === 0){
      this.newX = Math.random() * (CANVAS_WIDTH - this.width);
      this.newY = Math.random() * (CANVAS_HEIGHT - this.height);
    }
    this.x -= dx/70;
    this.y -= dy/70;
    if( (this.x + this.width < 0)) this.x = CANVAS_WIDTH;
    if( gameFrame % this.flapSpeed === 0 ) {
      this.frame > 7 ? this.frame = 0 : this.frame++;
    }
  }

  draw(){
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight, 
      this.x, 
      this.y, 
      this.width, 
      this.height
      );
  }
}

for(let i=0; i<numberOfEnemies; i++){
  enemiesArray.push(new Enemy());
}

for( let i=0; i<numberOfEnemies; i++){
  enemiesArray.push(new Enemy2());
}

for( let i=0; i<numberOfEnemies; i++){
  enemiesArray.push(new Enemy3());
}

for( let i=0; i<numberOfEnemies; i++){
  enemiesArray.push(new Enemy4());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach(enemy => {
    enemy.draw();
    enemy.update();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();