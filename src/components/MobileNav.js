function MobileNav({ links }) {
  return (
    <div className="mobile-links">
      <nav>
        <ul className="mobile-links-list">{links}</ul>
      </nav>
    </div>
  );
}

export default MobileNav;
