import React from "react";

const projects = [
  {
    title: "Inventory Management System", // 💡 Fixed: Naya project sabse aage add kar diya hai
    image: "/assets/imgs/inventory-management.png",
    description: "Comprehensive system to track stock levels, manage products, orders, and streamline warehouse operations.",
    primaryLink: {
      label: "Demo",
      href: "https://inventory-management-nu-beige.vercel.app/",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/inventory-management", // Is URL ko apne sahi repo se badal lijiyega
      variant: "primary",
    },
  },
  {
    title: "Aetheris Estate Portal",
    image: "/assets/imgs/aetheris-estate.png", 
    description: "Modern Real Estate web platform featuring interactive property search, filters, and glassmorphism UI.",
    primaryLink: {
      label: "Demo",
      href: "https://aetheris-estate-portal.vercel.app/",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/aetheris-estate-portal",
      variant: "primary",
    },
  },
  {
    title: "Video RAG Chatbot",
    image: "/assets/imgs/video-rag-chatbot.png",
    description: "AI-powered Video RAG chatbot using React, FastAPI, OpenAI, LangChain, and ChromaDB for video analysis and contextual Q&A.",
    primaryLink: {
      label: "Demo",
      href: "https://vedio-ai-chatbot.vercel.app/",
      variant: "light",
    },
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/SuhaTech/vedio-ai-chatbot",
      variant: "primary",
    },
  },
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
      href: "https://github.com/SuhaTech/plant-disease-detection",
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
    secondaryLink: null,
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
    secondaryLink: null,
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

                    {/* Primary Link rendering */}
                    {project.primaryLink && (
                      <a
                        href={project.primaryLink.href}
                        className={`btn btn-sm btn-${project.primaryLink.variant || "light"} m-1`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.primaryLink.label}
                      </a>
                    )}

                    {/* Secondary Link rendering with safety check */}
                    {project.secondaryLink && (
                      <a
                        href={project.secondaryLink.href}
                        className={`btn btn-sm btn-${project.secondaryLink.variant || "primary"} m-1`}
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