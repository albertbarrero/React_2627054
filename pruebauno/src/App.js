import './App.css';
import Testimonio1 from './components/Testimonio';
import Formulario from './components/form';

function App() {
  return (
    <div classNameName="App">
      <div classNameName='contenedor-principal'>
        <h1>TITULO DEL TALLER</h1>
        <Testimonio1
          nom="Albert Barrero"
          edad={42}
          cargo="Ing. de Sistemas"
          text="Ingeniero de Sistemas de la Fundacion Universitaria del Area Andina, Especialista en Pedagogia de la Universidad del Tolima, Especialista Tecnologico en Seguridad de Bases de Datos "
          imagen="Documentos"
        />

        <Testimonio1
          nom="Yulieth Marin"
          cargo="Ingeniera de Sistemas"
          text="Ingeniera de Sistemas de la Fundacion Universitaria del Area Andina, Master en Pedagogia de la Universidad del Tolima, Especialista Tecnologico en Seguridad de Bases de Datos "
          imagen="excel"
        />

       <Formulario />

      </div>

    </div>


  );
}

export default App;
