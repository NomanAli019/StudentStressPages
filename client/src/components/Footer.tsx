import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <div className="footer-logo-icon">S</div>
              <span>Sentellect</span>
            </div>
            <p>
              Personalized learning platform that adapts to your stress level,
              helping students learn mathematics in a way that works best for them.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" data-testid="link-facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" data-testid="link-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" data-testid="link-instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" data-testid="link-linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/" data-testid="footer-link-home"><a>Home</a></Link></li>
              <li><Link href="/about" data-testid="footer-link-about"><a>About</a></Link></li>
              <li><Link href="/chapter/4.1?stress=high" data-testid="footer-link-chapters"><a>Chapters</a></Link></li>
              <li><Link href="/quiz/1" data-testid="footer-link-quizzes"><a>Quizzes</a></Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="#" data-testid="footer-link-help">Help Center</a></li>
              <li><a href="#" data-testid="footer-link-faq">FAQ</a></li>
              <li><a href="#" data-testid="footer-link-privacy">Privacy Policy</a></li>
              <li><a href="#" data-testid="footer-link-terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:info@sentellect.com" data-testid="footer-link-email">info@sentellect.com</a></li>
              <li><a href="#" data-testid="footer-link-support">Support</a></li>
              <li><a href="#" data-testid="footer-link-feedback">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Sentellect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
