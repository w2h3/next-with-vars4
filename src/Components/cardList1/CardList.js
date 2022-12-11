import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import serv1 from "../../Pages/services/components/pics/serv1.jpg";
import serv2 from "../../Pages/services/components/pics/serv2.jpg";
import serv4 from "../../Pages/services/components/pics/serv4.jpg";
import { Link } from "react-router-dom";

function GridExample() {
  return (
    <div className="servcont">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv1} />
            <Card.Body>
              <Card.Title>
                <Link to="/AutoServices">AUTO SERVICES</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv2} />
            <Card.Body>
              <Card.Title>
                <Link to="/ITServices">IT SERVICES</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv2} />
            <Card.Body>
              <Card.Title>
                <Link to="/MaintenanceOfCommunucationEquipment">
                  MAINTENANCE OF COMMUNICATION EQUIPMENT
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv4} />
            <Card.Body>
              <Card.Title>
                <Link to="/TrainingAndTesting">TRAINING AND TESTING</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
