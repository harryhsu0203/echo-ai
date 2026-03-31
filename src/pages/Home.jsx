import { Link } from "react-router-dom";
import { services, caseStudies } from "../data/content";

function Home() {
  return (
    <>
      <section className="section simple-section">
        <div className="container">
          <p className="eyebrow">Echo AI</p>
          <h1>AI Solutions for Business</h1>
          <p className="lead">
            Echo AI 協助企業導入可落地的 AI 方案，從需求盤點到系統上線，建立可長期維運的數位能力。
          </p>
          <div className="simple-actions">
            <Link to="/services" className="btn">
              查看服務
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              聯絡顧問
            </Link>
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container">
          <h2>服務項目</h2>
          <div className="service-simple-list">
            {services.map((service) => (
              <article key={service.title} className="service-simple-item">
                <div className="service-simple-head">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul className="service-bullets">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-small">
                  預約諮詢
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container">
          <h2>EchoChat</h2>
          <p className="lead">
            EchoChat 提供企業可部署的對話式客服，支援 LINE、Web 與知識庫整合，協助客服流程穩定運作。
          </p>
          <div className="simple-actions">
            <a href="https://echochat.com.tw" target="_blank" rel="noopener noreferrer" className="btn">
              前往 EchoChat
            </a>
            <Link to="/contact" className="btn btn-ghost">
              預約 Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container">
          <h2>案例</h2>
          <div className="case-simple-list">
            {caseStudies.map((item) => (
              <article key={item.company} className="case-simple-item">
                <h3>{item.company}</h3>
                <p>{item.scenario}</p>
                <p>{item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container">
          <h2>開始規劃你的 AI 導入</h2>
          <p className="lead">先把網站版面穩定後，再逐步做後續優化。</p>
          <Link to="/contact" className="btn">
            立即聯絡
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
