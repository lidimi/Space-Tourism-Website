import navIcon from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";
import MobileNav from "../components/MobileNav";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", number: "00", textContent: "home" },
    { path: "/destination", number: "01", textContent: "destination" },
    { path: "/crew", number: "02", textContent: "crew" },
    { path: "/technology", number: "03", textContent: "technology" },
  ];

  const navLinks = links.map((link) => {
    return (
      <li key={link.number}>
        <NavLink to={link.path}>
          <span className="navigation--number">{link.number}</span>
          {link.textContent}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
          <ul className="desktop-nav">{navLinks}</ul>
        </nav>
      </div>
      <div className="navbar-mobile-nav">
        <button className="mobile-nav--button" onClick={handleClick}>
          <img src={isOpen ? iconClose : iconHamburger} alt="" />
        </button>
        {isOpen && <MobileNav links={navLinks} />}
      </div>
    </div>
  );
}

export default Navbar;
