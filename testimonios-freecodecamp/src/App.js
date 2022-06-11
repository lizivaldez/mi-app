
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
      <h1>No todo lo que brilla es oro</h1>
      <Testimonio 
        nombre='Susy Narvaez'
        pais='Suecia'
        imagen='1'
        cargo='Ingeniera de Software'
        empresa='Google'
        testimonio='Gestionar las extensiones. En tu ordenador, abre Chrome. Arriba a la derecha, haz clic en Más Más herramientas Extensiones. Haz los cambios que quieras: Activar/Desactivar: activa o'/>
      
      <Testimonio
        nombre='Ana Lacayo'
        pais='Alemania'
        imagen='2'
        cargo='Doctora'
        empresa='Apple'
        testimonio='Gestionar las extensiones. En tu ordenador, abre Chrome. Arriba a la derecha, haz clic en Más Más herramientas Extensiones. Haz los cambios que quieras: Activar/Desactivar: activa o'/>
        
        <Testimonio
        nombre='Sofía Perez'
        pais='Singapur'
        imagen='3'
        cargo='Veterinaria'
        empresa='Mascotas'
        testimonio='Gestionar las extensiones. En tu ordenador, abre Chrome. Arriba a la derecha, haz clic en Más Más herramientas Extensiones. Haz los cambios que quieras: Activar/Desactivar: activa o'/>
      </div>
    </div>
  );
}

export default App;
