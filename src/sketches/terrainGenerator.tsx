import P5 from 'p5';

// Define variables
let y: number
let start = 0
let offset = 0
let inc = 0.01



// export p5 sketch
export default function sketch(p5: P5) {

  // P5 sketch setup function
  p5.setup = function () {
    const appSize = p5.select('#App')?.size() as any // Canvas dive parent size
    p5.createCanvas(appSize.width, 200).parent('terrainGenerator') // Create Canvas
    p5.noFill()

  }

  // P5 draw function
  p5.draw = function () {
    p5.background("#f8f8f8") // set background color

    offset = start

    p5.beginShape()

    for (let x = 0; x <= p5.width; x += 8) {
      y = p5.noise(offset) * p5.height + 50
      p5.vertex(x, y)
      offset += inc
      if (x === 200) {
        p5.push()
        p5.fill("white")
        p5.circle(x, y - 25, 25)
        p5.pop()
      }

    }
    p5.endShape()

    start += inc

  }

  // Window resize function
  p5.windowResized = function () {
    const appSize = p5.select('#App')?.size() as any // get Canvas div parent size
    p5.resizeCanvas(appSize.width, 200) // resize canvas to div
  }


}