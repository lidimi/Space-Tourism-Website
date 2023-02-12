function DestinationNav() {
  const destinations = ["Moon", "Mars", "Europa", "Titan"];

  const destinationList = destinations.map((destination) => {
    return <li key={destination}>{destination}</li>;
  });
  return (
    <div className="destination-nav">
      <nav>
        <ul className="destination-list">{destinationList}</ul>
      </nav>
    </div>
  );
}

export default DestinationNav;
