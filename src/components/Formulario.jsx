import { useState } from "react";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import Clima from "./Clima";

const Formulario = () => {
    const [pais, setPais] = useState('');
    const [datos, setDatos] = useState({});
    const consultarApi = async (pais) => {
        try {
          const respuesta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=436b5789015431fd04ad33ddb1024d71`
          );
          const dato = await respuesta.json();
          setDatos(dato);
        } catch (e) {
          console.log(e);
        }
      };
  return (
    <Container className="my-5">
      <Form className="row align-items-center" onSubmit={(e)=>{
        e.preventDefault();
        consultarApi(pais);
        console.log(datos)
      }}>
        <Form.Group className="col-md-10" controlId="pais">
          <FloatingLabel controlId="pais" label="Ingrese un pais">
            <Form.Control type="text" placeholder="Ej: Argentina" onChange={(e)=>setPais(e.target.value)} value={pais}/>
          </FloatingLabel>
        </Form.Group>
        <div className="col-md-2">
          <Button variant="primary" type="submit" className="w-100 mt-4 mt-md-0">
            Ver clima
          </Button>
        </div>
      </Form>
      <Clima></Clima>
    </Container>
  );
};

export default Formulario;
