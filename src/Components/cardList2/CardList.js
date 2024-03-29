import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-bootstrap";
import car from "./pics/car.svg";
import helmetIcon from "./pics/helmet.svg";
import aiplaneIcon from "./pics/airplane.svg";
import tractorIcon from "./pics/tractor.svg";
import sheildIcon from "./pics/sheild.svg";
import vestIcon from "./pics/vest.svg";
import coverIcon from "./pics/cover.svg";
import opticsIcon from "./pics/optics.svg";
import accessoriesIcon from "./pics/accessories.svg";
import communicationIcon from "./pics/communication.svg";
import nightIcon from "./pics/night.svg";
import thermalIcon from "./pics/thermal.svg";
import robotIcon from "./pics/robot.svg";
import "./style3.css";

function GridExample() {
  return (
    <div className="prodcont1111">
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" alt="#" src={car} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/AutoSpareParts">Auto Spare Parts</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" alt="#" src={aiplaneIcon} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/UAV">UAV</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" alt="#" src={tractorIcon} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/TrackedVehiclesSpareParts">
                  Tracked Vehicles Spare Parts
                </NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" alt="#" src={coverIcon} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/Cover">Cover</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" alt="#" src={communicationIcon} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/Communication">Communication</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" alt="#" src={robotIcon} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/Robots">Robots</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="weaponry">
        <div className="h3">
          <h3>Weaponry</h3>
        </div>
        <div className="g-3">
          <Row xs={1} md={2} className="g-4">
            <Col className="col1">
              <Card>
                <Card.Img className="icon" variant="top" alt="#" src={helmetIcon} />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/Helmets">Helmets</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img
                  className="icon"
                  variant="top"
alt="#"                   src={accessoriesIcon}
                />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/Accessories">Accessories</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img className="icon" variant="top" alt="#" src={sheildIcon} />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/ArmorPlates">Armor Plates</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col1">
              <Card>
                <Card.Img className="icon" variant="top" alt="#" src={vestIcon} />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/BulletprofVest">Bulletprof Vest</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div className="optics">
        <div className="h3">
          <h3>Optics</h3>
        </div>
        <Row xs={1} md={2} className="g-4">
          <Col className="col1">
            <Card>
              <Card.Img className="icon" variant="top" alt="#" src={opticsIcon} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/Optics">Daylight Optics</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col1">
            <Card>
              <Card.Img className="icon" variant="top" alt="#" src={nightIcon} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/NightVision">Night Vision Optics</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col1">
            <Card>
              <Card.Img className="icon" variant="top" alt="#" src={thermalIcon} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/ThermalVision">Thermal Vision Optics</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridExample;
