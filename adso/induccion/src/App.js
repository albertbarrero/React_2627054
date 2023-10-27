
import './App.css';
import Cuadro from './components/cuadro';

function App() {
  return (
    <div className="App">
      <Cuadro 
      nom="Angie Garcia"
      edad={25}
      cargo="Programadora"
      exp="5 años de PHP, 3 años de JAVA"
      imagen="Documentos"
      
      />
      <Cuadro 
      nom="Jose Ordoñez"
      edad={28}
      cargo="Programador"
      exp="3 años de PHP, 6 años de JAVA"
      imagen="excel"
      
      />
    </div>
  );
}

export default App;
