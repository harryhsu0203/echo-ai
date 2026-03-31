import { Link } from "react-router-dom";
import { services } from "../data/content";

function Services() {
  return (
    <section className="page section simple-section">
      <div className="container">
        <div className="inner-hero">
          <p className="eyebrow">Echo AI 服務項目</p>
          <h1>企業人工智慧服務版圖</h1>
          <p className="lead">
            每一項服務都以「可落地」為核心，從需求到上線形成完整交付鏈，確保人工智慧不是實驗，而是可持續運作的能力。
          </p>
        </div>

        <div className="split-list">
          {services.map((service, index) => (
            <article key={service.title} className={`split-row split-block ${index % 2 === 1 ? "reverse" : ""}`}>
              <div className="split-media">
                <img className="content-image" src={service.image} alt={service.imageAlt} loading="lazy" />
              </div>
              <div className="split-content split-card">
                <div className="service-simple-head">
                  <span className="service-icon">{service.icon}</span>
                  <h2>{service.title}</h2>
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
              </div>
            </article>
          ))}
        </div>

        <div className="simple-actions">
          <Link to="/contact" className="btn">
            立即聯絡
          </Link>
          <Link to="/" className="btn btn-ghost">
            返回首頁
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
