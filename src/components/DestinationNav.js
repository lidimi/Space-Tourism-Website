import { useState } from "react";

function DestinationNav({ handleClick }) {
  const [active, setActive] = useState(0);

  const destinations = [
    { id: 0, title: "Moon" },
    { id: 1, title: "Mars" },
    { id: 2, title: "Europa" },
    { id: 3, title: "Titan" },
  ];

  const setDestination = (e) => {
    handleClick(e.target.id);
  };

  const destinationList = destinations.map((destination) => {
    return (
      <li
        key={destination.id}
        id={destination.id}
        onClick={setDestination}
        className={active === destination.id ? "active" : ""}
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
