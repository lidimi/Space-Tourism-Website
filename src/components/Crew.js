import { useState } from "react";

function Crew(props) {
  const [active, setActive] = useState(0);

  const setCrew = (e) => {
    props.handleClick(e.target.value);
  };

  return (
    <div className="crew">
      <div className="crew-person">
        <h3 className="crew-role">{props.role}</h3>
        <h4 className="crew-name">{props.name}</h4>
        <p className="crew-bio">{props.bio}</p>
        <div className="crew-nav">
          <button
            onClick={setCrew}
            value={0}
            className={`crew-nav--btn`}
          ></button>
          <button
            onClick={setCrew}
            value={1}
            className="crew-nav--btn"
          ></button>
          <button
            onClick={setCrew}
            value={2}
            className="crew-nav--btn"
          ></button>
          <button
            onClick={setCrew}
            value={3}
            className="crew-nav--btn"
          ></button>
        </div>
      </div>
      <div className="crew-img">
        <img src={props.src} alt="crew person" />
      </div>
    </div>
  );
}

export default Crew;
