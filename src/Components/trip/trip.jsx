import { Card, Button } from "react-bootstrap";
import image from '../../static/routeA.jpg';
import {Link} from 'react-router-dom';

function Trip(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={image} />
      <Card.Body>
        <Card.Title>{props.distance}</Card.Title>
        <Card.Text>
          Pickup Point: {props.pickupLocation}
        </Card.Text>
        <br />
        <Card.Text>
          Drop Point: {props.dropLocation}
        </Card.Text>
        <Link to="/bidding">
        <Button variant="primary">Bid</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Trip;
