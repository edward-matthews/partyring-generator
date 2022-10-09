let partyring;
let biscuitMask;
function setup() {
  createCanvas(400, 400);
  biscuitMask = createGraphics(width, height)

  randomRingButton = createButton('Random Partyring')
  randomRingButton.mousePressed(randomRing)
  downloadButton = createButton('Save as PNG')
  downloadButton.mousePressed(saveAsPng)
    partyring = new Partyring()
}

function draw() {
  background(255);
  partyring.show()
}

function randomRing() {
  biscuitMask.clear();
  bgColour = color(random(255), random(255), random(255));
  noiseSeed(random(200))
  partyring = new Partyring();
}

function saveAsPng() {
    saveCanvas("partyring");
}

