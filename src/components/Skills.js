export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container text-center">
        <p className="section-subtitle">Tech I Use</p>
        <h6 className="section-title mb-6">Skills</h6>

        {/* Languages */}
        <h5 className="skill-group-title">Languages</h5>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/python.png')" }}>
              <div className="overlay"><h6>Python</h6></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/java.png')" }}>
              <div className="overlay"><h6>Java</h6></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/c.png')" }}>
              <div className="overlay"><h6>C</h6></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/javascript.png')" }}>
              <div className="overlay"><h6>JavaScript</h6></div>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <h5 className="skill-group-title mt-5">Frameworks</h5>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/react.png')" }}>
              <div className="overlay"><h6>React.js</h6></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/django.png')" }}>
              <div className="overlay"><h6>Django</h6></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/bootstrap.png')" }}>
              <div className="overlay"><h6>Bootstrap</h6></div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <h5 className="skill-group-title mt-5">Tools</h5>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/git.png')" }}>
              <div className="overlay"><h6>Git</h6></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/github.png')" }}>
              <div className="overlay"><h6>GitHub</h6></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="skill-card" style={{ backgroundImage: "url('/assets/skills/sql.png')" }}>
              <div className="overlay"><h6>SQL</h6></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
