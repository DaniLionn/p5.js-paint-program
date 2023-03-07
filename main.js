var colour = "#000000"
var size = 10
var drawingName = "Untitled"
var rainbowModeOn = false


const rainbowColours = ["#fc0303", "#fc8803", "#fcfc03", "#20fc03", "#0328fc", "#7f03fc"]

var rainbowIndex = 0
var rainbowLength = rainbowColours.length

function setup() {
   let canvas = createCanvas(800, 500);
  
  canvas.parent("mycanvas");
  background(255);

  let red = createButton('red')
  let orange = createButton('orange')
  let yellow = createButton('yellow')
  let green = createButton('green')
  let blue = createButton('blue')
  let purple = createButton('purple')
  let pink = createButton('pink')
  let brown = createButton('brown')
  let black = createButton('black')
  let rainbow = createButton('rainbow')
  let erase = createButton('eraser')

  red.id("r")
  orange.id("o")
  yellow.id("y")
  green.id("g")
  blue.id("b")
  purple.id("p")
  pink.id("pk")
  brown.id("br")
  black.id("bk")
  rainbow.id("rb")
  erase.id("e")

  red.mousePressed(function (){
    cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/redpntbrsh.cur')
    rainbowModeOn = false
    colour = "#fc0303"
  }) 

    orange.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/orange_paint_brush.cur')
      rainbowModeOn = false
    colour = "#fc8803"
  }) 

    yellow.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/yellowpntbrsh.cur')
      rainbowModeOn = false
    colour = "#fcfc03"
  }) 

    green.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/greenpntbrsh.cur')
      rainbowModeOn = false
    colour = "#20fc03"
  }) 

    blue.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/bluepntbrush.cur')
      rainbowModeOn = false
    colour = "#0328fc"
  }) 

    purple.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/purplepntbrsh.cur')
      rainbowModeOn = false
    colour = "#7f03fc"
  }) 

    pink.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/pink_paint_brush.cur')
      rainbowModeOn = false
    colour = "#ff96cb"
  }) 

    brown.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/brownpntbrush.cur')
      rainbowModeOn = false
    colour = "#38241b"
  }) 

    black.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/blackpntbrush.cur')
      rainbowModeOn = false
    colour = "#000000"
  }) 

      rainbow.mousePressed(function (){
        cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/rainbowpntbrsh.cur')
      rainbowModeOn = true
    
  }) 

  erase.mousePressed(function (){
    cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/eraser.cur')
    rainbowModeOn = false
  colour = "#ffffff"
}) 

  let sizeInput = createInput('size')
  
  sizeInput.size(100);
  sizeInput.input(function(){
    size = this.value()
  })

  let save = createButton('save')

save.position(7,550)
  
  save.mousePressed(function() {
   saveCanvas(canvas, drawingName, 'png');
  })


  let clearButton = createButton('clear')

  clearButton.position(50,550)
  
  clearButton.mousePressed(function() {
    clearFunction()
  })

    let drawingNameInput = createInput('Untitled')
  
  drawingNameInput.size(100);
  drawingNameInput.position(95,550)
  drawingNameInput.input(function(){
    drawingName = this.value()
  })
  
    

};



function draw() {

frameRate(15);

  if (rainbowModeOn === true) {
    colour = rainbowColours[rainbowIndex]

    rainbowIndex += 1
    if (rainbowIndex > rainbowLength) {
      rainbowIndex = 0
    }
  }
}

function mouseDragged() {
  fill(colour)
  noStroke() 
  square(mouseX, mouseY, size)  
}



function clearFunction() {
  let canvas = createCanvas(800, 500);
  
  canvas.parent("mycanvas");
  background(255);
}
  