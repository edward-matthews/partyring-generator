class Partyring {
    constructor() {
      this.outerR = map(random(), 0, 1, 150, width / 2);
      this.innerR = map(random(), 0, 1, 10, 100);
      this.primaryColour = color(random(255), random(255), random(255));
      this.secondaryColour = color(random(255), random(255), random(255));
      this.numStripes = ceil(map(random(), 0, 1, 0, 3));
      this.strkWght = map(random(), 0, 1, 8, 32);
      this.waviness = map(random(), 0, 1, 0.01, 0.1)
  
    }
    
    drawBiscuit() {
          push()
      translate(-this.outerR, -this.outerR)
      biscuitMask.noStroke();
      biscuitMask.fill(this.primaryColour)
      biscuitMask.beginShape()
      for (let angle = 0; angle < TWO_PI; angle+= 0.001) {
        const xoff = map(cos(angle), -1, 1, 0, 1);
        const yoff = map(sin(angle), -1, 1, 0, 1);
        const r = map(noise(xoff, yoff), 0, 1, 0.85, 1.15) * this.outerR;
        const x = map(cos(angle), -1, 1, 0, 2 * r);
        const y = map(sin(angle), -1, 1, 0, 2 * r);
        biscuitMask.vertex(x, y);
      }
      biscuitMask.endShape()
      image(biscuitMask, width / 2, height / 2)
    pop()
    }
    
    drawStripes() {
      push()
      translate(-this.outerR, -this.outerR)
      fill(this.secondaryColour)
      for (let i = 1; i <= this.numStripes; i++) {
        let stripe = createGraphics(width, height);
          stripe.stroke(this.secondaryColour);
          stripe.strokeWeight(this.strkWght)
          const yoff = this.outerR * 2 / (this.numStripes + 1) * i;
        for (let x = 0; x < this.outerR * 2; x += 0.1) {        
          stripe.point(x, map(sin(x * this.waviness), -1, 1, -50, 50) + yoff)
        }
        let newStripe = stripe.get()
        newStripe.mask(biscuitMask)
        image(newStripe, width / 2, height / 2)
      }
      pop();
      
    }
    drawHole() {
      noStroke();
      fill(255)
      beginShape()
      for (let angle = 0; angle < TWO_PI; angle+= 0.01) {
        const xoff = map(cos(angle), -1, 1, 0, 1);
        const yoff = map(sin(angle), -1, 1, 0, 1);
        const r = map(noise(xoff, yoff), 0, 1, 0.6, 1.4) * this.innerR;
        const x = map(cos(angle), -1, 1, -r, r);
        const y = map(sin(angle), -1, 1, -r, r);
        vertex(x + width / 2, y + height / 2);
      }
      endShape()
    }
    show() {
      this.drawBiscuit();
      this.drawStripes();
      this.drawHole();
  
    }
  
    
  }