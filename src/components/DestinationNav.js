function DestinationNav({ handleClick }) {
  const destinations = [
    { value: 0, title: "Moon" },
    { value: 1, title: "Mars" },
    { value: 2, title: "Europa" },
    { value: 3, title: "Titan" },
  ];

  const setDestination = (e) => {
    handleClick(e.target.value);
  };

  const destinationList = destinations.map((destination) => {
    return (
      <li
        key={destination.title}
        value={destination.value}
        onClick={setDestination}
      >
        {destination.title}
      </li>
    );
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
