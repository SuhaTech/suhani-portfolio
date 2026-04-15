const projects = [
  {
    title: "Plant Disease Detection",
    image: "/assets/imgs/plant-disease.png",
    description: "CNN-based image classification model (2025)",
    primaryLink: {
      label: "Report",
      href: "/CV_Report.pdf",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/PlantDiseaseDetection",
      variant: "primary",
    },
  },
  {
    title: "Streamlining Success",
    image: "/assets/imgs/streamlining-success.png",
    imageFit: "contain",
    imageBackground: "#0b0f1a",
    description: "Frontend portal UI deployed on Vercel",
    primaryLink: {
      label: "Demo",
      href: "https://streamlit-success-frontend.vercel.app/",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/Streamlit-Success",
      variant: "primary",
    },
  },
  {
    title: "E-commerce Store",
    image: "/assets/imgs/ecommerce.png",
    imageFit: "contain",
    imageBackground: "#ffffff",
    description: "Django store with cart, checkout, and invoice (2025)",
    primaryLink: {
      label: "Demo",
      href: "https://ecommerce-django-store.onrender.com/",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/ecommerce-django-store",
      variant: "primary",
    },
  },
  {
    title: "Urban Sound Classification",
    image: "/assets/imgs/soundclassification.png",
    description: "ML model with Streamlit",
    primaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/soundclassification",
      variant: "primary",
    },
  },
  {
    title: "Fake News Detection",
    image: "/assets/imgs/fakenews.png",
    description: "React frontend with Flask backend",
    primaryLink: {
      label: "Demo",
      href: "https://fake-news-frontend-eta.vercel.app/",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/fake-news-frontend",
      variant: "primary",
    },
  },
  {
    title: "HR Analytics Dashboard",
    image: "/assets/imgs/hr_analytics.png",
    description: "Power BI dashboard",
    primaryLink: {
      label: "View",
      href: "/build/HR_Analytics_Dashboard.pbix",
      variant: "light",
    },
  },
  {
    title: "Notes App",
    image: "/assets/imgs/note-app.png",
    description: "React.js app to create, edit, and delete notes (2024)",
    primaryLink: {
      label: "Demo",
      href: "https://react-notes-app-jrm1-git-main-suhani-tomars-projects.vercel.app",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/react-notes-app",
      variant: "primary",
    },
  },
];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">What I&apos;ve Built</p>
        <h6 className="section-title mb-6">Projects</h6>

        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.title}>
              <div className="portfolio-card">
                <img
                  src={project.image}
                  className="portfolio-card-img"
                  alt={project.title}
                  style={{
                    objectFit: project.imageFit || "cover",
                    background: project.imageBackground || "transparent",
                  }}
                />

                <div className="portfolio-card-overlay">
                  <div className="portfolio-card-caption">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>

                    <a
                      href={project.primaryLink.href}
                      className={`btn btn-sm btn-${project.primaryLink.variant} m-1`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.primaryLink.label}
                    </a>

                    {project.secondaryLink && (
                      <a
                        href={project.secondaryLink.href}
                        className={`btn btn-sm btn-${project.secondaryLink.variant} m-1`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.secondaryLink.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
