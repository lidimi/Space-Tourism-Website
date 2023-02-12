import DestinationNav from "../components/DestinationNav";

function Destination(props) {
  return (
    <div className="destination">
      <div className="destination-image">
        <img src={props.src} alt="" />
      </div>
      <div className="destination-about">
        <DestinationNav />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Destination;
