export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container text-center">
        <p className="section-subtitle">What I Offer</p>
        <h2 className="section-title mb-5">Core Competencies & Skills</h2>

        {/* Core Competencies */}
        <div className="row g-4">
          {[
            {
              title: "Problem Solving",
              img: "/assets/icons/problem-solving.jpeg",
              desc: "Strong in DSA, OOPs, and Debugging. Ability to solve coding challenges and optimize solutions effectively.",
            },
            {
              title: "Full-Stack Development",
              img: "/assets/icons/fullstack.jpeg",
              desc: "Skilled in building web & mobile apps using React.js (frontend), Django/SQL (backend), and Bootstrap for UI.",
            },
            {
              title: "Data & Analytics",
              img: "/assets/icons/data-analyst.jpeg",
              desc: "Experience with Python, Data Analytics, and Machine Learning. Worked on projects involving CNN for image classification.",
            },
          ].map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="service-card p-4 shadow-sm rounded h-100 bg-white">
                <img
                  src={service.img}
                  alt={service.title}
                  width="70"
                  className="mb-3 rounded-circle shadow-sm"
                />
                <h5 className="fw-bold mb-3">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="section-title mb-4">Technical Skills</h3>
          </div>

          {[
  { name: "Python", img: "/assets/skills/python.png" },
  { name: "Java", img: "/assets/skills/java.png" },
  { name: "C", img: "/assets/skills/c.png" },
  { name: "JavaScript", img: "/assets/skills/javascript.png" },
  { name: "React.js", img: "/assets/skills/react.png" },
  { name: "Django", img: "/assets/skills/django.png" },
  { name: "Bootstrap", img: "/assets/skills/bootstrap.png" },
  { name: "SQL", img: "/assets/skills/sql.png" },
  { name: "Git", img: "/assets/skills/git.png" },
  { name: "GitHub", img: "/assets/skills/github.png" },
].map((skill, index) => (
  <div className="col-md-2 col-sm-4 col-6" key={index}>
    <div className="skill-card">
      <img src={skill.img} alt={skill.name} className="skill-logo" />
      <span>{skill.name}</span>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}
