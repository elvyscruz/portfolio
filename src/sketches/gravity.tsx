import P5 from 'p5';

// export p5 sketch
export default function sketch(p5: P5) {
  const balls: Ball[] = []

  let gravitySlider: P5.Element
  let windSlider: P5.Element
  let gravityValue: P5.Vector
  let windValue: P5.Vector
  // let accSlider: P5.Element

  class Ball {

    pos = p5.createVector(p5.random(p5.width), p5.random(p5.height))
    mass = p5.random(50)
    vel = p5.createVector(0, 0.0)
    acc = p5.createVector(0, 0)
    gravity = p5.createVector(0, 0.000001 * this.mass)
    wind = p5.createVector(0, 0)
    color = p5.color('#f8f8f8')


    update() {
      gravityValue = p5.createVector(0, Number(gravitySlider.value()) * this.mass)
      windValue = p5.createVector(Number(windSlider.value()), 0)

      this.acc.add(gravityValue)
      this.vel.add(this.acc)
      this.vel.add(windValue)
      this.pos.add(this.vel)

      p5.fill(this.color)

      if (this.pos.y > p5.height) {
        this.acc.mult(0)
        this.vel.mult(0)
        this.wind.mult(0)
        this.pos.y = 0;
      }

      if (this.pos.x > p5.width) {
        this.wind.mult(0)
        this.pos.x = 0;
      }

    }

  }


  // P5 sketch setup function
  p5.setup = function () {
    const appSize = p5.select('#App')?.size() as any // Canvas dive parent size
    p5.createCanvas(appSize.width, 200).parent('gravity') // Create Canvas

    for (let i = 0; i < 50; i++) {
      balls.push(new Ball())
    }

    p5.createDiv().id('gravityInputs').parent('gravity')
    p5.createSpan('Gravity').parent('gravityInputs')
    gravitySlider = p5.createSlider(0.0000007, 0.00003, 0.000005, 0.000001).parent('gravityInputs')
    p5.createSpan('Wind').parent('gravityInputs')
    windSlider = p5.createSlider(0, 0.009, 0, 0.001).parent('gravityInputs')

  }

  // P5 draw function
  p5.draw = function () {
    p5.background("#f8f8f8") // set background color

    for (let ball of balls) {
      ball.update()
      p5.ellipse(ball.pos.x, ball.pos.y, ball.mass)
    }

  }

  // Window resize function
  p5.windowResized = function () {
    const appSize = p5.select('#App')?.size() as any // get Canvas div parent size
    p5.resizeCanvas(appSize.width, 200) // resize canvas to div
  }

}