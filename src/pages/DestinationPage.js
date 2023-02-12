import data from "../data.json";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";

function DestinationPage() {
  const destinations = data.destinations.map((destination) => {
    console.log(destination.images.png);
    return (
      <Destination
        key={destination.name}
        src={destination.images.webp}
        title={destination.name}
        description={destination.description}
        distance={destination.distance}
        travel={destination.travel}
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
        {destinations[0]}
      </div>
    </div>
  );
}

export default DestinationPage;
