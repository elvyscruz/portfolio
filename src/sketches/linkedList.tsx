import P5 from 'p5';

class Node {
  constructor(readonly value: string, public next: Node | null = null, public x: number = 0, public y: number = 0) {
  }
}


export default function sketch(p5: P5) {
  const canvasWidth = 0.8 // 70% of screen with
  const nodeSpacing = 0.25 // 20% of screen with


  p5.setup = function () {
    p5.createCanvas(p5.windowWidth * canvasWidth, 200).parent('linkedList')
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.textStyle(p5.BOLD)
    p5.rectMode(p5.CENTER)
    p5.noLoop()

  }
  p5.draw = function () {
    p5.background("yellow")
    linkedList.dislayNodes(a)


  }
  p5.windowResized = function () {
    p5.resizeCanvas(this.windowWidth * canvasWidth, 200)
  }

  // LinkedList Object
  const linkedList = {

    // Renders linkedlist on the canvas
    dislayNodes(head: Node) {
      let current = head

      let counter = 0
      let prevX: number = 0

      let nodeSize = p5.width * 0.1
      let offset = p5.width * 0.07 // offset position for first node

      // traverse linkedList
      while (current !== null) {

        current.x = offset + counter * p5.width * nodeSpacing
        current.y = p5.height / 2

        p5.rect(current.x, current.y, nodeSize)
        p5.rect(current.x + nodeSize, current.y, nodeSize)
        p5.text(current.value, current.x, current.y)

        // Draw the Arrow
        if (prevX > 0) {
          p5.line(current.x - (nodeSize / 2), current.y, prevX, current.y)
          p5.text(String.fromCharCode(0x027A4), current.x - (nodeSize / 2) - 5, current.y)
          p5.strokeWeight(5)
          p5.point(prevX, current.y)
          p5.strokeWeight(1)
        }

        prevX = current.x + nodeSize
        current = current.next!
        counter += 1
      }


    }
  }

  const a = new Node('A')
  const b = new Node('B')
  const c = new Node('C')
  const d = new Node('D')

  a.next = b
  b.next = c
  c.next = d


}