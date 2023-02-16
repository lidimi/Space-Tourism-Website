import { useState } from "react";
import Navbar from "../components/Navbar";
import Technology from "../components/Technology";
import data from "../data.json";

function TechnologyPage() {
  const [technology, setTechnology] = useState(0);

  const navigationButtons = [
    { id: 0, textContent: "1" },
    { id: 1, textContent: "2" },
    { id: 2, textContent: "3" },
  ];

  const buttons = navigationButtons.map((button) => {
    return (
      <button
        className={`technologies-nav--btn ${
          technology === button.id ? `technologies-nav--btn-active` : ``
        }`}
        key={button.id}
        onClick={() => {
          setTechnology(button.id);
        }}
      >
        {button.textContent}
      </button>
    );
  });

  const technologies = data.technology.map((technology) => {
    return (
      <Technology
        key={technology.name}
        name={technology.name}
        desc={technology.description}
        src={technology.images.portrait}
        landscapeSrc={technology.images.landscape}
      />
    );
  });

  return (
    <div className="technology-page">
      <Navbar />
      <h2 className="page-title">
        <span className="page-number">03</span> SPACE LAUNCH 101
      </h2>
      <div className="technologies">
        <div className="technologies-nav">{buttons}</div>
        <div className="technologies-technology">
          {technologies[technology]}
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;
