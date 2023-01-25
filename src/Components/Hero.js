import "./hero.css";
function Hero() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 style={{ fontSize: "50px" }}>I am John Doe</h1>
        <p>Nasa Images</p>
        <button>View Image</button>
      </div>
    </div>
  );
}

export default Hero;
