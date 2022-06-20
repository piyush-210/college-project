import * as React from "react";
import { Container, Row } from "react-bootstrap";
import CustomNavbar from "../../Components/Navbar";
import { TripArray } from "../../Components/TripForm";
import Trip from "../../Components/trip/trip";
// import tripData from '../../DummyData/tripData.json';

function bid() {
  console.log(TripArray+"Hi");
  const data = [...[JSON.parse(localStorage.getItem("data"))]];
  console.log(data[0]);
  return (
    <>
      <CustomNavbar active="bid" />
      <br />
      <Container>
        {
          data.forEach((ele)=> {
            console.log(ele);
            if(ele!=null)
            <Trip pickupLocation={ele.pickupLocation} dropLocation={ele.dropLocation}/>
          })
        }
      </Container>
    </>
  );
}

export default bid;
