import { Form, Button, Stack } from "react-bootstrap";
import {useState} from 'react';
// import { Link } from "react-router-dom";

export const TripArray = [];

const TripForm = (props) => {
  const [pickupLoc,setPickupLoc] = useState("");
  const [dropLoc,setDropLoc] = useState("");
  function pickupInputHandler(e) {
    setPickupLoc(e.target.value);
  }
  function dropInputHandler(e) {
    setDropLoc(e.target.value);
  }
  const Rid = Math.random(1,100);
  function onSubmitHandler(e) {
    e.preventDefault();
    const data = {
      pickupLocation: pickupLoc,
      dropLocation: dropLoc,
      passangerID: props.passangerID,
      tripID: Rid
    };
    console.log(data);
    const oldData=[...[JSON.parse(localStorage.getItem("data"))]];
    oldData.push(data)
    localStorage.setItem("data",JSON.stringify(oldData));
    TripArray.push(data);
  }
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>Set PickUp Location</Form.Label>
        <Form.Control type="text" placeholder="Enter pickup location" onChange={pickupInputHandler} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Set Drop Location</Form.Label>
        <Form.Control type="text" placeholder="Enter drop location" onChange={dropInputHandler} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Stack gap={2} className="col-md-5 mx-auto">
        {/* <Link to={"/booking"}> */}
        <Button variant="secondary" type="submit" onClick={onSubmitHandler}>
          Find a Taxi
        </Button>
        {/* </Link> */}
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
    </Form>
  );
}

export default TripForm;
