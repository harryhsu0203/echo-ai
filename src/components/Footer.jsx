import { Link } from "react-router-dom";
import EchoLogo from "./EchoLogo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <div className="footer-logo">
            <EchoLogo mode="full" />
          </div>
          <p className="footer-text">
            為企業打造真正能落地的人工智慧解決方案，從策略到交付一站式完成。
          </p>
          <div className="footer-tags">
            <span>企業級導入</span>
            <span>智慧整合</span>
            <span>客製開發</span>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/services">服務項目</Link>
          <Link to="/about">關於我們</Link>
          <Link to="/contact">聯絡我們</Link>
          <a
            href="https://echochat.com.tw"
            target="_blank"
            rel="noopener noreferrer"
          >
            EchoChat
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Echo AI。版權所有。</p>
    </footer>
  );
}

export default Footer;
