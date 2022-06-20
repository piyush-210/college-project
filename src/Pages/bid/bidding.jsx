import React from "react";
import CustomNavbar from "../../Components/Navbar";
import Timer from "../../Components/Timer";

function Bidding(props) {
    return (
        <>
            <CustomNavbar />
            <div
                style={{
                    margin: "20px"
                }}
            >
                <h1
                    style={{
                        marginLeft: "350px"
                    }}>
                    Finding the best price for you.:)
                </h1>
                <Timer />
                <h1
                    style={{
                        marginLeft: "500px",
                        fontSize: "20px"
                    }}>
                    Current Price: {props.price}$
                </h1>
                <input type="number" placeholder="Your Bid" name="bid" />
                <button type="submit">Place Bid</button>
            </div>
        </>
    );
}

export default Bidding;
