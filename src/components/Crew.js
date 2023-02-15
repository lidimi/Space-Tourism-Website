function Crew(props) {
  const setCrew = (e) => {
    props.handleClick(e.target.id);
  };

  const crewNavigationButtons = [
    { id: 0, value: "Douglas Hurley" },
    { id: 1, value: "Mark Shuttleworth" },
    { id: 2, value: "Victor Glover" },
    { id: 3, value: "Anousheh Ansari" },
  ];

  const buttons = crewNavigationButtons.map((button) => {
    return (
      <button
        key={button.id}
        className={`crew-nav--btn ${
          props.name === button.value ? `active-btn` : ``
        }`}
        id={button.id}
        onClick={setCrew}
      ></button>
    );
  });

  return (
    <div className="crew">
      <div className="crew-person">
        <h3 className="crew-role">{props.role}</h3>
        <h4 className="crew-name">{props.name}</h4>
        <p className="crew-bio">{props.bio}</p>
        <div className="crew-nav">{buttons}</div>
      </div>
      <div className="crew-img">
        <img src={props.src} alt="crew person" />
      </div>
    </div>
  );
}

export default Crew;
