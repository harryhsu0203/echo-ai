import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <div className="footer-logo">
            <span className="brand-dot" />
            <p className="footer-brand">Echo AI</p>
          </div>
          <p className="footer-text">
            為企業打造真正能落地的 AI 解決方案，從策略到交付一站式完成。
          </p>
          <div className="footer-tags">
            <span>Enterprise Ready</span>
            <span>AI Integration</span>
            <span>Custom Build</span>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/services">服務</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://echochat.com.tw"
            target="_blank"
            rel="noopener noreferrer"
          >
            EchoChat
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Echo AI. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
