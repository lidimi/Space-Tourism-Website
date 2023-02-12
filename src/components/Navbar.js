import navIcon from "../assets/shared/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={navIcon} alt="logo" />
      </div>
      <div className="navbar-decorative">
        <div className="line"></div>
      </div>
      <div className="navbar-navigation">
        <nav>
          <ul className="desktop-nav">
            <li>
              <span className="navigation--number">00</span> HOME
            </li>
            <li>
              <span className="navigation--number">01</span> DESTINATION
            </li>
            <li>
              <span className="navigation--number">02</span> CREW
            </li>
            <li>
              <span className="navigation--number">03</span> TECHNOLOGY
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
