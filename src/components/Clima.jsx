import { Container, Card } from "react-bootstrap";

const Clima = ({ datos, mostrarClima }) => {
  const KELVINS = 273.15;
  const urlIcono = "https://openweathermap.org/img/w/";

  const monstrarCard = mostrarClima ? (
    <Container className="mt-5">
      <Card className="text-center w-100 mx-auto card-clima">
        <Card.Header>{datos?.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>Clima: {(datos?.main?.temp - KELVINS).toFixed(1)}°C</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">
                {datos?.weather[0]?.description}
                <img
                  src={urlIcono + datos?.weather[0]?.icon + ".png"}
                  alt={datos?.weather[0]?.description}
                />
              </cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    <Container className="mt-5 text-center">
        <h1 className="fst-italic text-danger display-6">INGRESA UN PAIS O LOCALIDAD VALIDA</h1>
    </Container>
  );
  return monstrarCard;
};

export default Clima;
