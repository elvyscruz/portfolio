import P5 from 'p5';

export default function sketch(p5: P5) {
  p5.setup = function () {
    p5.createCanvas(this.windowWidth * .7, 200).parent('linkedList')
  }
  p5.draw = function () {
    p5.background("yellow")

  }
  p5.windowResized = function () {
    p5.resizeCanvas(this.windowWidth * .7, 200)
  }
}