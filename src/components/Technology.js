function Technology({ name, desc, src }) {
  return (
    <div className="technology">
      <div className="technology-about">
        <h3 className="technology-heading">the terminology...</h3>
        <h4 className="technology-name">{name}</h4>
        <p className="technology-description">{desc}</p>
      </div>
      <div className="technology-img">
        <img src={src} alt={`picture of ${name}`} />
      </div>
    </div>
  );
}

export default Technology;
