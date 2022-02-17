import P5 from 'p5';

// export p5 sketch
export default function sketch(p5: P5) {

  // P5 sketch setup function
  p5.setup = function () {
    const appSize = p5.select('#App')?.size() as any // Canvas dive parent size
    p5.createCanvas(appSize.width, 200).parent('imageClassifier') // Create Canvas
    p5.background('yellow')
  }

  // P5 draw function
  p5.draw = function () {
    p5.background("yellow") // set background color

  }

  // Window resize function
  p5.windowResized = function () {
    const appSize = p5.select('#App')?.size() as any // get Canvas div parent size
    p5.resizeCanvas(appSize.width, 200) // resize canvas to div
  }


}