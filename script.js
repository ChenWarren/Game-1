/**
 * @type {HTMLCanvasElement}
 */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

CANVAS_HEIGHT = canvas.height = 1000;
CANVAS_WIDTH = canvas.width = 500;
const numberOfEnemies = 10;
let enemiesArray = [];

class Enemy {
  constructor(width, height, xSpeed, ySpeed){
    this.x = Math.random() * CANVAS_WIDTH;
    this.y = Math.random() * CANVAS_HEIGHT;
    this.width = width;
    this.height = height;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed; 
  }

  update(){
    this.x+= this.xSpeed;
    this.y+= this.ySpeed;
  }

  draw(){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

for(let i=0; i<numberOfEnemies; i++){
  enemiesArray.push(new Enemy(50, 50, Math.random()*5, Math.random()*5));
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach(enemy => {
    enemy.update();
    enemy.draw();
  })
  requestAnimationFrame(animate);
}

// animate();