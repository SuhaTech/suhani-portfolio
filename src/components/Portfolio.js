export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container text-center">
        <p className="section-subtitle">What I’ve Built</p>
        <h6 className="section-title mb-6">Projects</h6>
        <div className="row">

          {/* Plant Disease Detection */}
          <div className="col-md-4">
            <div className="portfolio-card">
              <img src="/assets/imgs/plant-disease.png" className="portfolio-card-img" alt="Plant Disease Detection" />
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-caption">
                  <h4>Plant Disease Detection</h4>
                  <p>CNN-based Image Classification model (2025)</p>
                  <a href="/CV_Report.pdf" className="btn btn-sm btn-light m-1" target="_blank" rel="noreferrer">Report</a>
                  <a href="https://github.com/SuhaTech/PlantDiseaseDetection" className="btn btn-sm btn-primary m-1" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* React Notes App */}
          <div className="col-md-4">
            <div className="portfolio-card">
              <img src="/assets/imgs/note-app.png" className="portfolio-card-img" alt="Notes App" />
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-caption">
                  <h4>Notes App</h4>
                  <p>React.js | Create, edit, delete notes (2024)</p>
                  <a href="https://react-notes-app-jrm1-git-main-suhani-tomars-projects.vercel.app" className="btn btn-sm btn-light m-1" target="_blank" rel="noreferrer">Demo</a>
                  <a href="https://github.com/SuhaTech/react-notes-app" className="btn btn-sm btn-primary m-1" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Django E-commerce Store */}
          <div className="col-md-4">
            <div className="portfolio-card">
              <img src="/assets/imgs/ecommerce.png" className="portfolio-card-img" alt="E-commerce Store" />
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-caption">
                  <h4>E-commerce Store</h4>
                  <p>Django store with cart, checkout & invoice (2025)</p>
                  <a href="https://ecommerce-django-store.onrender.com/" className="btn btn-sm btn-light m-1" target="_blank" rel="noreferrer">Demo</a>
                  <a href="https://github.com/SuhaTech/ecommerce-django-store" className="btn btn-sm btn-primary m-1" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <br></br>

          <br></br>
          <div className="col-m d-4">
            <div className="portfolio-card">
              <img src="/assets/imgs/weather-app.png" className="portfolio-card-img" alt="Weather App" />
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-caption">
                  <h4>Weather App</h4>
                  <p>HTML, CSS, JAVASCRIPT </p>
                  <a href="https://weather-app-eight-tau-78.vercel.app/" className="btn btn-sm btn-light m-1" target="_blank" rel="noreferrer">Demo</a>
                  <a href="https://github.com/SuhaTech/weather-app" className="btn btn-sm btn-primary m-1" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
