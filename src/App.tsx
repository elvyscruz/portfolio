import './App.css';
import P5Canvas from './P5Canvas';
import linkedList from './sketches/linkedList'
import binaryTree from './sketches/binaryTree'

function App() {

  return (
    <div className="App">
      <h1>Skills Demo</h1>
      <P5Canvas title="Singly Linked List" id="linkedList" sketch={linkedList} />

    </div>
  );
}

export default App;
