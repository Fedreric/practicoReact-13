import { Container, Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="pais">
          <Form.Label>Ingrese un pais</Form.Label>
          <Form.Control type="text" placeholder="Ej: Argentina" />
          <Button variant="primary" type="submit">
            Ver clima
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Formulario;
