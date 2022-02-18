import './App.css';
import P5Canvas from './P5Canvas';
import linkedList from './sketches/linkedList'
import terrainGenerator from './sketches/terrainGenerator'
import gravity from './sketches/gravity'

function App() {

  return (
    <div id="App">
      <h1>Interactive Portfolio</h1>
      <hr />
      <P5Canvas title="Singly Linked List" id="linkedList" sketch={linkedList} />
      <P5Canvas title="Terrain Generator" id="terrainGenerator" sketch={terrainGenerator} />
      <P5Canvas title="Gravity, Mass and Acceleration" id="gravity" sketch={gravity} />

    </div>
  );
}

export default App;
