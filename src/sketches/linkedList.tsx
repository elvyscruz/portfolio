import P5 from 'p5';

class Node {
  constructor(readonly value: string, public next: Node | null = null, public x: number = 0, public y: number = 0) {
  }
}

const Nodes: Node[] = []

const a = new Node('Fox')
const b = new Node('Dog')
const c = new Node('Cat')
const d = new Node('Bee')

a.next = b
b.next = c
c.next = d

Nodes.push(a, b, c, d)


export default function sketch(p5: P5) {
  // const canvasWidth = 1 // 70% of screen with
  const nodeSpacing = 0.25 // 20% of screen with

  let infoPanel: P5.Element

  p5.setup = function () {
    const appSize = p5.select('#App')?.size() as any
    p5.createCanvas(appSize.width, 200).parent('linkedList')
    p5.textAlign(p5.CENTER, p5.CENTER)
    // p5.textStyle(p5.BOLD)
    p5.rectMode(p5.CENTER)
    p5.noLoop()

    infoPanel = p5.createDiv('Click Nodes for more info...')
    // infoPanel.style('text-align:center')

  }
  p5.draw = function () {
    p5.background("yellow")
    p5.textSize(p5.width * 0.03)

    linkedList.dislayNodes(a)

  }
  p5.windowResized = function () {
    const appSize = p5.select('#App')?.size() as any
    p5.resizeCanvas(appSize.width, 200)
  }

  p5.mousePressed = function () {
    const nodeSize = (p5.width * 0.08)
    Nodes.forEach((node) => {
      if (p5.dist(node.x, node.y, p5.mouseX, p5.mouseY) < nodeSize) {
        infoPanel.html(`Node <strong>value</strong> is <strong>${node.value}</strong>,&nbsp;&nbsp; ${node.value}<strong>.next </strong> is <strong>${node.next?.value ?? 'null'}</storng>`)
        p5.redraw()
        p5.push()
        p5.fill('cyan')
        p5.rect(node.x, node.y, nodeSize)
        p5.pop()
        p5.text(node.value, node.x, node.y)
      }
    })
  }


  // LinkedList Object
  const linkedList = {

    // Renders linkedlist on the canvas
    dislayNodes(head: Node) {
      let current = head

      let counter = 0
      let prevX: number = 0

      let nodeSize = p5.width * 0.08
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





}