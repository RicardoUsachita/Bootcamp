
import './App.css';
import Mensaje from './Mensaje';

function Descripcion() {
  return (
    <p>Estoy aprendiendo React</p>
  );
}

const App = () =>{

  return (
    <div className="App">
      <Mensaje color='red' message='Mensaje en progreso' />
      <Mensaje color='blue' message= 'Aprendiendo' />
      <Mensaje color='yellow' message= 'cosas en react' />
      <Descripcion />
    </div>
  );
}

export default App;
