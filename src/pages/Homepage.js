import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <main className="homepage-content">
        <header className="homepage-about">
          <p className="homepage-about-travel">SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p className="homepage-about-desc">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </header>
        <div className="homepage-button">
          <div className="homepage-btn">
            <Link to="/destination">EXPLORE</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
