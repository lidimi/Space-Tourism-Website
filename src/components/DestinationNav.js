function DestinationNav({ handleClick, currentDestination }) {
  const destinations = [
    { id: 0, title: "Moon" },
    { id: 1, title: "Mars" },
    { id: 2, title: "Europa" },
    { id: 3, title: "Titan" },
  ];

  const destinationList = destinations.map((destination) => {
    const setDestination = (e) => {
      handleClick(e.target.id);
    };

    return (
      <li
        key={destination.id}
        id={destination.id}
        className={
          currentDestination === destination.title ? "active-destination" : ""
        }
        onClick={setDestination}
      >
        <button id={destination.id} className="destination-nav--btn">
          {destination.title}{" "}
        </button>
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
