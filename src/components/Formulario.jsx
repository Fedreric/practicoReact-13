import { useState } from "react";
import { Container, Form, Button, FloatingLabel, Spinner} from "react-bootstrap";
import Clima from "./Clima";

const Formulario = () => {
  const [pais, setPais] = useState("");
  const [datos, setDatos] = useState({});
  const [mostrarClima, setMostrarClima] = useState(false);
  const [mostrarSpiner, setMostrarSpiner] = useState(false);
  const consultarApi = async (pais) => {
    setMostrarSpiner(true);
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=436b5789015431fd04ad33ddb1024d71&lang=es`
      );
      const dato = await respuesta.json();
      console.log(dato);
      if (dato.cod === 200) {
        setDatos(dato);
        setMostrarSpiner(false);
        setMostrarClima(true);
      } else {
        setMostrarSpiner(false);
        setMostrarClima(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const spinner = mostrarSpiner ? (
    <Container className="text-center mt-5">
      <Spinner animation="grow" />
    </Container>
  ) : (
    <Clima
      datos={datos}
      mostrarClima={mostrarClima}
      mostrarSpiner={mostrarSpiner}
    ></Clima>
  );
  return (
    <Container className="my-5">
      <Form
        className="row align-items-center"
        onSubmit={(e) => {
          e.preventDefault();
          consultarApi(pais);
          console.log(datos);
        }}
      >
        <Form.Group className="col-md-10" controlId="pais">
          <FloatingLabel controlId="pais" label="Ingrese un pais">
            <Form.Control
              type="text"
              placeholder="Ej: Argentina"
              onChange={(e) => setPais(e.target.value)}
              value={pais}
            />
          </FloatingLabel>
        </Form.Group>
        <div className="col-md-2">
          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-4 mt-md-0"
          >
            Ver clima
          </Button>
        </div>
      </Form>
      {spinner}
    </Container>
  );
};

export default Formulario;
