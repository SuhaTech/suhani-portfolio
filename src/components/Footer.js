import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <p className="mb-2">© {new Date().getFullYear()} Suhani Tomar</p>

        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            className="social-icon github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="social-icon linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:suhanitomar603@gmail.com"
            className="social-icon gmail"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
