import P5 from 'p5';

// Create Node Class
class Node {
  constructor(readonly value: string, public next: Node | null = null, public x: number = 0, public y: number = 0) {
  }
}

// Array for adding Nodes
const Nodes: Node[] = []

// Create some nodes
const a = new Node('Fox')
const b = new Node('Dog')
const c = new Node('Cat')
const d = new Node('Bee')

// Set next value for nodes
a.next = b
b.next = c
c.next = d

// Push nodes to Array
Nodes.push(a, b, c, d)


// export p5 sketch
export default function sketch(p5: P5) {
  const nodeSpacing = 0.25 // 20% of screen with

  let infoPanel: P5.Element // Create html element

  // P5 sketch setup function
  p5.setup = function () {
    const appSize = p5.select('#App')?.size() as any // Canvas dive parent size
    p5.createCanvas(appSize.width, 200).parent('linkedList') // Create Canvas
    p5.textAlign(p5.CENTER, p5.CENTER) // center text inside nodes
    p5.rectMode(p5.CENTER)
    p5.noLoop()

    infoPanel = p5.createDiv('Click Nodes for more info...')

  }

  // P5 draw function
  p5.draw = function () {
    p5.background("yellow") // set background color
    p5.textSize(p5.width * 0.03) // text size will depend on screen width
    linkedList.dislayNodes(a) // Traverse and Display nodes starting from head 


  }
  // Window resize function
  p5.windowResized = function () {
    const appSize = p5.select('#App')?.size() as any // get Canvas div parent size
    p5.resizeCanvas(appSize.width, 200) // resize canvas to div
  }

  // Mouse pressed function
  p5.mousePressed = function () {
    const nodeSize = (p5.width * 0.08) // node size

    // Loop through all the nodes
    Nodes.forEach((node) => {
      // Check click is within rect box
      if (
        p5.mouseX > node.x - (nodeSize / 2) &&
        p5.mouseX < node.x + (nodeSize / 2) + nodeSize &&
        p5.mouseY > node.y - (nodeSize / 2) &&
        p5.mouseY < node.y + (nodeSize / 2)

      ) {
        p5.redraw()
        p5.push()
        p5.fill(255, 204, 0)
        p5.rect(node.next?.x!, node.next?.y!, nodeSize)
        p5.circle(node.x + nodeSize, node.y, nodeSize * 0.5)

        p5.fill('cyan')
        p5.rect(node.x, node.y, nodeSize * 0.9)
        p5.fill('black')
        //p5.stroke('black')
        p5.text(node.next?.value!, node.next?.x!, node.y)
        p5.text(node.value, node.x, node.y)
        infoPanel.html(`Node <strong>value</strong> is <strong>${node.value}</strong>,&nbsp;&nbsp; ${node.value}<strong>.next </strong> is <strong>${node.next?.value ?? 'null'}</storng>`)
        p5.pop()

      }


    })
  }

  p5.mouseMoved = function () {

    p5.cursor(this.ARROW)

    if (checkNodeBounds()) {
      p5.cursor(p5.HAND)
    }

  }

  function checkNodeBounds(): boolean {
    const nodeSize = (p5.width * 0.08) // node size

    let current = a
    // console.log(p5.cursor)
    while (current !== null) {
      if (
        p5.mouseX > current.x - nodeSize / 2 &&
        p5.mouseX < current.x + nodeSize / 2 + nodeSize &&
        p5.mouseY > current.y - nodeSize / 2 &&
        p5.mouseY < current.y + nodeSize / 2
      ) {
        return true
      }
      current = current.next!
    }
    return false
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

