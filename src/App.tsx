import './App.css';
import P5Canvas from './P5Canvas';
import linkedList from './sketches/linkedList'
import binaryTree from './sketches/binaryTree'

function App() {

  return (
    <div className="App">
      <h1>Skills Demo</h1>
      <P5Canvas title="Linked List" id="linkedList" sketch={linkedList} />
      <P5Canvas title="Binary Tree" id="binaryTree" sketch={binaryTree} />

    </div>
  );
}

export default App;
