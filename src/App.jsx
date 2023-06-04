import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';
import './App.css'

function App() {
  return (
    <Container>
      <h1 className='display-4 text-center mt-5'> Clima en tiempo real</h1>
      <hr />
    <Formulario></Formulario>
    </Container>
  )
}

export default App
