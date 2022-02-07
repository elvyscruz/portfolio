import P5 from 'p5';

class Node {
  constructor(readonly value: string, public next: null | Node = null) {
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')



export default function sketch(p5: P5) {
  p5.setup = function () {
    p5.createCanvas(p5.windowWidth * .7, 200).parent('linkedList')
    p5.textAlign(p5.CENTER)
  }
  p5.draw = function () {
    p5.background("yellow")
    linkedList.dislayNode(a, 25, 25)

  }
  p5.windowResized = function () {
    p5.resizeCanvas(this.windowWidth * .7, 200)
  }

  const linkedList = {
    dislayNode(node: Node, x: number, y: number, fill?: string) {
      p5.circle(x, y, 30)
      p5.text(node.value, x, y)
    }
  }
}