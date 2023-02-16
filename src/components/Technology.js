function Technology({ name, desc, src, landscapeSrc }) {
  return (
    <div className="technology">
      <div className="technology-landscape-img">
        <img src={landscapeSrc} alt={name} />
      </div>
      <div className="technology-about">
        <h3 className="technology-heading">the terminology...</h3>
        <h4 className="technology-name">{name}</h4>
        <p className="technology-description">{desc}</p>
      </div>
      <div className="technology-img">
        <img src={src} alt={`${name}`} />
      </div>
    </div>
  );
}

export default Technology;
