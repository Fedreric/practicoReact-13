import { Container, Card } from "react-bootstrap";

const Clima = () => {
  return (
    <Container className="mt-5">
      <Card className="text-center">
        <Card.Header>Argentina</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Clima: 22°C
            </p>
            <footer className="blockquote-footer">
                 <cite title="Source Title">Soleado</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Clima;
