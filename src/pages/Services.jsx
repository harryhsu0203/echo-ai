import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/content";

function Services() {
  return (
    <>
      <section className="brand-full service-page-hero">
        <img className="brand-bg-image" src={services[1].image} alt={services[1].imageAlt} loading="eager" />
        <div className="brand-layer brand-layer-hero" />
        <div className="brand-hero-inner">
          <ScrollReveal className="brand-overlay-card">
            <p className="brand-eyebrow">Echo AI 服務項目</p>
            <h1>企業人工智慧服務版圖</h1>
            <p>以品牌級視覺與可落地方案為核心，為企業打造長期可持續的智慧競爭力。</p>
          </ScrollReveal>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          className={`brand-full service-page-panel ${index % 2 === 1 ? "align-right" : "align-left"}`}
        >
          <img className="brand-bg-image" src={service.image} alt={service.imageAlt} loading="lazy" />
          <div className="brand-layer brand-layer-panel" />
          <div className={`brand-panel-inner ${index % 2 === 1 ? "is-right" : ""}`}>
            <ScrollReveal className="brand-panel-copy panel-with-list" delay={index * 0.06}>
              <p className="brand-index">服務 0{index + 1}</p>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="brand-panel-list">
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="brand-actions">
                <Link to="/contact" className="btn">
                  預約諮詢
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="brand-full service-page-cta">
        <img className="brand-bg-image" src={services[4].image} alt={services[4].imageAlt} loading="lazy" />
        <div className="brand-layer brand-layer-cta" />
        <div className="brand-cta-inner">
          <ScrollReveal className="brand-overlay-card brand-overlay-center">
            <h2>需要量身規劃的導入路徑嗎？</h2>
            <p>與 Echo AI 團隊對談，快速建立符合你產業情境的人工智慧方案。</p>
            <div className="brand-actions">
              <Link to="/contact" className="btn">
                立即聯絡我們
              </Link>
              <Link to="/" className="btn btn-ghost">
                回到首頁
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Services;
