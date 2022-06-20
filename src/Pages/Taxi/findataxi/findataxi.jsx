import React from "react";
import CustomNavbar from "../../../Components/Navbar";
import TripForm from "../../../Components/TripForm";
import image from "../../../static/sampleMap.jpeg";

function Findataxi() {
  
  return (
    <>
      <CustomNavbar active="findataxi" />
      <br />
      <div
        style={{
          paddingLeft: "420px",
          margin: "10px",
          height: "100px",
          width: "1000px",
        }}
      >
        <TripForm passangerID= "1" />
      </div>
      <div
        style={{
          marginTop: "150px",
          marginLeft: "230px",
        }}
      >
        <h3>
          Selecting pickup and drop location through map will be added soon
          here.
        </h3>
      </div>
      <div
        style={{
          marginTop: "10px",
          paddingLeft: "450px",
        }}
      >
        <img src={image} alt="map" />
      </div>
    </>
  );
}

export default Findataxi;
