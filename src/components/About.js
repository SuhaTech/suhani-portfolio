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
              I am <b>Suhani Tomar</b>, a Computer Science student with strong knowledge in 
              <b> C, Python, and Java</b>. I enjoy building software solutions including 
              web and mobile applications, designing databases, and debugging systems. 
              I am passionate about technology, eager to learn, and a collaborative 
              team player with strong problem-solving skills.
            </p>

            {/* Resume Button */}
            <a 
              className="btn btn-primary mt-3 px-4 py-2 rounded-pill shadow-sm" 
              href="/My_Resume.pdf" 
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
