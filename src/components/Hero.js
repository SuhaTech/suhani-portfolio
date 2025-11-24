export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Side - Text */}
        <div className="hero-text">
          <h4 className="hero-subtitle">👋 Hello, I am</h4>
          <h1 className="hero-title">Suhani Tomar</h1>
          <h6 className="hero-role">Computer Science Student | Machine Learning Developer | Data Analyst</h6>
          <a href="#portfolio" className="btn btn-primary">View My Work</a>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image">
          <img src="/assets/imgs/profile.jpeg" alt="Suhani Tomar" />
        </div>
      </div>
    </header>
  );
}
