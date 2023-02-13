import Navbar from "../components/Navbar";
import data from "../data.json";
import Crew from "../components/Crew";

function CrewPage() {
  const displayCrew = data.crew.map((crew) => {
    return (
      <Crew
        key={crew.name}
        name={crew.name}
        src={crew.images.png}
        role={crew.role}
        bio={crew.bio}
      />
    );
  });

  return (
    <div className="crew-page">
      <Navbar />
      <h2 className="page-title">
        <span className="page-number">02</span> MEET YOUR CREW
      </h2>
      {displayCrew[1]}
    </div>
  );
}

export default CrewPage;
