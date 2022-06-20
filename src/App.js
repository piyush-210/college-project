import "./App.css";
import HomePage from "./Pages/homePage/homePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bid from "./Pages/bid/bid";
import Findataxi from "./Pages/Taxi/findataxi/findataxi";
import BookingTaxi from "./Pages/Taxi/bookingataxi/bookingTaxi";
import Bidding from "./Pages/bid/bidding";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={HomePage()} />
          <Route path="/findataxi" element={Findataxi()} />
          <Route path="/bid" element={Bid()} />
          <Route path="/booking" element={BookingTaxi({price: 500})} />
          <Route path="/bidding" element={Bidding({price: 500})} />
      </Routes>
    </Router>
  );
}

export default App;
