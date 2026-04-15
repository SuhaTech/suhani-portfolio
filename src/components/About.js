export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about d-flex flex-column flex-md-row align-items-center">
          
          {/* Left Image */}
          <div className="about-img-holder mb-4 mb-md-0 me-md-5 text-center">
            <img 
              src="/assets/imgs/aboutme.png" 
              className="about-img rounded-circle shadow-lg" 
              alt="Suhani Tomar" 
              style={{ width: "220px", height: "220px", objectFit: "cover" }}
            />
          </div>

          {/* Right Text */}
          <div className="about-caption text-center text-md-start">
            <p className="section-subtitle">Who Am I?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p className="about-text">
              I am <b>Suhani Tomar</b>, a <b>Full Stack Developer</b> with a strong focus on <b>React.js, Node.js, Express.js, and MongoDB</b>. I build responsive web applications, create REST APIs, and work across both frontend and backend to deliver complete solutions. Along with full stack development, I also have working knowledge of <b>machine learning and data analytics</b>, which helps me approach projects from both a development and problem-solving perspective. I am eager to learn, collaborative, and always focused on building practical, user-friendly products.
            </p>

            {/* Resume Button */}
            <a 
              className="btn btn-primary mt-3 px-4 py-2 rounded-pill shadow-sm" 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
