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
              I am <b>Suhani Tomar</b>, a Computer Science student with strong knowledge in <b>Python, R, and SQL</b> . I enjoy analyzing data, building machine learning models, and deriving actionable insights to solve complex problems. I have experience in <b>data preprocessing, statistical analysis, and predictive modeling</b> , and I am passionate about leveraging technology to drive informed decision-making. I am eager to learn, a collaborative team player, and possess strong problem-solving skills with a keen interest in data-driven solutions.
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
