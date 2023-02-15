import DestinationNav from "../components/DestinationNav";

function Destination(props) {
  return (
    <div className="destination">
      <div className="destination-image">
        <img src={props.src} alt="" />
      </div>
      <div className="destination-about">
        <DestinationNav
          handleClick={props.onClick}
          currentDestination={props.currentDestination}
        />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="line"></div>
        <div className="destination-about-details">
          <div className="details-distance">
            <h3>AVG. DISTANCE</h3>
            <p>{props.distance}</p>
          </div>
          <div className="details-travel">
            <h3>EST. TRAVEL TIME</h3>
            <p>{props.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
