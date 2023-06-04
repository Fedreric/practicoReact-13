import { useState } from "react";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";

const Formulario = () => {
    const [localidad, setLocalidad] = useState('');

  return (
    <Container className="my-5">
      <Form className="row align-items-center">
        <Form.Group className="col-md-10" controlId="pais">
          <FloatingLabel controlId="pais" label="Ingrese una localidad">
            <Form.Control type="text" placeholder="Ej: Argentina" onChange={(e)=>setLocalidad(e.target.value)} value={localidad}/>
          </FloatingLabel>
        </Form.Group>
        <div className="col-md-2">
          <Button variant="primary" type="submit" className="w-100 mt-4 mt-md-0">
            Ver clima
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Formulario;
