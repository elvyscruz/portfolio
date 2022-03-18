import './App.css';
import P5Canvas from './P5Canvas';
import linkedList from './sketches/linkedList'
import binaryTree from './sketches/binaryTree'
import terrainGenerator from './sketches/terrainGenerator'
import gravity from './sketches/gravity'
import imageClassifier from './sketches/imageClassifier'

function App() {

  return (
    <div id="App">
      <h1>Interactive Portfolio</h1>
      <hr />
      <P5Canvas title="Singly Linked List" id="linkedList" sketch={linkedList} />
      <P5Canvas title="DFS and BFS Binary Tree Traversal" id="binaryTree" sketch={binaryTree} />
      <P5Canvas title="Terrain Generator" id="terrainGenerator" sketch={terrainGenerator} />
      <P5Canvas title="Gravity, Mass and Acceleration" id="gravity" sketch={gravity} />
      <P5Canvas title="Image Prediction" id="imageClassifier" sketch={imageClassifier} />

    </div>
  );
}

export default App;
