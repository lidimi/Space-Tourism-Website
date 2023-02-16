import navIcon from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/">
                <span className="navigation--number">00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination">
                <span className="navigation--number">01</span> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew">
                <span className="navigation--number">02</span> CREW
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology">
                <span className="navigation--number">03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
