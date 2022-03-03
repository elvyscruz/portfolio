import P5 from 'p5';

let treeA: Array<Node>
let treeB: Array<Node>

let interval: any

// export p5 sketch
export default function sketch(p5: P5) {

  // P5 sketch setup function
  p5.setup = function () {
    const appSize = p5.select('#App')?.size() as any // Canvas dive parent size
    p5.createCanvas(appSize.width, 200).parent('binaryTree') // Create Canvas

    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.ellipseMode(p5.CENTER)
    p5.angleMode(p5.DEGREES)
    p5.textSize(20)
    p5.frameRate(1)
    p5.background('#f8f8f8')
    p5.noLoop()


    fillNodes(tA_a, 50, 50)
    fillNodes(tB_a, 50, 50)

    p5.fill('orange')


    p5.text('DFS', tA_a.x, tA_a.y + 45)

    p5.text('BFS', tB_a.x, tB_a.y + 45)

    treeA = dfs(tA_a)
    treeB = bfs(tB_a)
    renderTree(treeA, p5)
    renderTree(treeB, p5)


  }

  // P5 draw function

  p5.draw = function () {
    p5.background('#f8f8f8')

    p5.fill('grey')

    p5.text('DFS', tA_a.x, tA_a.y + 45)

    p5.text('BFS', tB_a.x, tB_a.y + 45)

    interval = setInterval(() => {
      renderTree(treeA, p5)
      renderTree(treeB, p5)
      clearTree(treeA, p5)
      clearTree(treeB, p5)

    }, 7000)



  }


  // Window resize function
  p5.windowResized = function () {
    const appSize = p5.select('#App')?.size() as any // get Canvas div parent size
    p5.resizeCanvas(appSize.width, 200) // resize canvas to div

    clearTree(treeA, p5)
    clearTree(treeB, p5)
    clearInterval(interval)
  }


}


function fillNodes(root: Node, spacing: number, nodeDiameter: number) {
  if (root === null) return

  if (root.left) {
    root.left.x = root.x - spacing
    root.left.y = root.y + spacing

  }

  if (root.right) {
    root.right.x = root.x + spacing
    root.right.y = root.y + spacing
  }


  fillNodes(root.left!, spacing * 0.6, nodeDiameter)
  fillNodes(root.right!, spacing * 0.6, nodeDiameter)
}




function dfs(root: Node): Array<Node> {
  if (root == null) return []

  const stack = [root]
  const results: Array<Node> = []

  while (stack.length > 0) {

    const node = stack.pop()
    results.push(node!)


    if (node!.right) stack.push(node!.right)
    if (node!.left) stack.push(node!.left)

  }


  return results
}

function bfs(root: Node) {
  if (root == null) return []

  const queue = [root]
  const results: Array<Node> = []

  while (queue.length > 0) {

    const node = queue.shift()
    results.push(node!)

    if (node!.left) queue.push(node!.left)
    if (node!.right) queue.push(node!.right)

  }

  return results
}


class Node {
  val: string
  left: Node | null
  right: Node | null
  x: number
  y: number

  constructor(val = '', left = null, right = null, x = 0, y = 0) {
    this.val = val
    this.left = left
    this.right = right
    this.x = x
    this.y = y
  }
}


const tA_a = new Node('a', null, null, 110, 50)
const tA_b = new Node('b')
const tA_c = new Node('c')
const tA_d = new Node('d')
const tA_e = new Node('e')
const tA_f = new Node('f')
const tA_g = new Node('g')


tA_a.left = tA_b
tA_a.right = tA_c
tA_b.left = tA_d
tA_b.right = tA_e
tA_c.left = tA_f
tA_c.right = tA_g



const tB_a = new Node('a', null, null, 340, 50)
const tB_b = new Node('b')
const tB_c = new Node('c')
const tB_d = new Node('d')
const tB_e = new Node('e')
const tB_f = new Node('f')
const tB_g = new Node('g')


tB_a.left = tB_b
tB_a.right = tB_c
tB_b.left = tB_d
tB_b.right = tB_e
tB_c.left = tB_f
tB_c.right = tB_g

function renderTree(tree: Array<Node>, p5: P5) {

  let kolor = p5.color('#a8e8e8')
  for (let i = 0; i < tree.length; i++) {
    setTimeout(() => {
      renderNode(tree[i], kolor, p5)
      renderLeftLine(tree[i], 25, p5)
      renderRightLine(tree[i], 25, p5)
    }, i * 1000)
  }
}

function clearTree(results: Array<Node>, p5: P5) {
  let kolor = p5.color(255)
  for (let i = 0; i < results.length; i++) {
    renderNode(results[i], kolor, p5)
    renderLeftLine(results[i], 25, p5)
    renderRightLine(results[i], 25, p5)
  }
}

function renderNode(root: Node, kolor: P5.Color, p5: P5) {
  p5.fill(kolor)
  p5.circle(root.x, root.y, 25)
  p5.fill(0)
  p5.text(root.val, root.x, root.y)

}

function renderLeftLine(root: Node, nodeDiameter: number, p5: P5) {
  let r = nodeDiameter / 2
  let angle = -45
  let dx = r * p5.cos(angle)
  let dy = r * p5.sin(angle)
  if (root.left) p5.line(root.x - dx, root.y - dy, root.left.x + dx, root.left.y + dy)
}


function renderRightLine(root: Node, nodeDiameter: number, p5: P5) {
  let r = nodeDiameter / 2
  let angle = -45
  let dx = r * p5.cos(angle)
  let dy = r * p5.sin(angle)
  if (root.right) p5.line(root.x + dx, root.y - dy, root.right.x - dx, root.right.y + dy)

}