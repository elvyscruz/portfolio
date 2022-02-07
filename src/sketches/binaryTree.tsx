import P5 from 'p5';

export default function sketch(p5: P5) {
  p5.setup = function () {
    p5.createCanvas(this.windowWidth * .7, 200).parent('binaryTree')
  }
  p5.draw = function () {
    p5.background("cyan")
    p5.circle(p5.mouseX, p5.mouseY, 25)

  }
  p5.windowResized = function () {
    p5.resizeCanvas(this.windowWidth * .7, 200)
  }
}