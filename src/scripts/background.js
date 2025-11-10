let mainCanvas = document.getElementById("myCanvas");
let mainContext = mainCanvas.getContext('2d');
let circles = [];

// Ajustar el tamaño del canvas al tamaño de la ventana
mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;

let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

class Circle {
  constructor(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = 0.01 + Math.random() * 0.5;
    this.counter = 0;
    this.sign = Math.random() < 0.5 ? -1 : 1;
  }

  update() {
    this.counter += this.sign * this.speed;

    mainContext.beginPath();
    mainContext.arc(
      this.xPos + Math.cos(this.counter / 50) * this.radius,
      this.yPos + Math.sin(this.counter / 50) * this.radius,
      this.width,
      0,
      Math.PI * 2,
      false
    );
    mainContext.closePath();

    mainContext.fillStyle = `rgba(205, 215, 221, ${this.opacity})`;
    mainContext.fill();
  }
}

function drawCircles() {
    const width = window.innerWidth;
    for (let i = 0; i < width / 80 ; i++) {
    let randomX = Math.round(Math.random() * window.innerWidth);
    let randomY = Math.round(Math.random() * window.innerHeight);
    let speed = 0.2 + Math.random() * 0.5;
    let size = 3 + Math.random() * 4;

    let circle = new Circle(40, speed, size, randomX, randomY);
    circles.push(circle);
  }

  draw();
}

drawCircles();

function draw() {
  // Ajustar el tamaño del canvas al tamaño de la ventana en cada frame
  mainCanvas.width = window.innerWidth;
  mainCanvas.height = window.innerHeight;

  mainContext.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circles.length; i++) {
    let myCircle = circles[i];
    myCircle.update();
  }

  requestAnimationFrame(draw);
}

// Manejar eventos táctiles para interactuar con los círculos
mainCanvas.addEventListener('touchstart', function (e) {
  e.preventDefault();
  handleTouch(e.touches);
});

mainCanvas.addEventListener('touchmove', function (e) {
  e.preventDefault();
  handleTouch(e.touches);
});

function handleTouch(touches) {
  for (let i = 0; i < touches.length; i++) {
    let touchX = touches[i].clientX;
    let touchY = touches[i].clientY;

    for (let j = 0; j < circles.length; j++) {
      let circle = circles[j];
      let dx = touchX - circle.xPos;
      let dy = touchY - circle.yPos;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < circle.radius) {
        // Interacción con el círculo, puedes hacer algo aquí
        // Por ejemplo, cambiar propiedades del círculo
      }
    }
  }
}