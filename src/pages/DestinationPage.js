import data from "../data.json";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import { useState } from "react";

function DestinationPage() {
  const [destination, setDestination] = useState(0);

  const handleClick = (value) => {
    setDestination(value);
  };

  const destinations = data.destinations.map((destination) => {
    return (
      <Destination
        key={destination.name}
        src={destination.images.webp}
        title={destination.name}
        description={destination.description}
        distance={destination.distance}
        travel={destination.travel}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="app">
      <div className="destination-page">
        <Navbar />
        <h2>
          <span className="page-number">01</span> PICK YOUR DESTINATION
        </h2>
        {destinations[destination]}
      </div>
    </div>
  );
}

export default DestinationPage;
