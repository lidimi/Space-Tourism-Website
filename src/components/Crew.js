function Crew(props) {
  return (
    <div className="crew">
      <div className="crew-person">
        <h3 className="crew-role">{props.role}</h3>
        <h4 className="crew-name">{props.name}</h4>
        <p className="crew-bio">{props.bio}</p>
        <div className="crew-nav">
          <button className="crew-nav--btn"></button>
          <button className="crew-nav--btn"></button>
          <button className="crew-nav--btn"></button>
          <button className="crew-nav--btn"></button>
        </div>
      </div>
      <div className="crew-img">
        <img src={props.src} alt="crew person" />
      </div>
    </div>
  );
}

export default Crew;
