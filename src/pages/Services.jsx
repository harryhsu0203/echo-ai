import ScrollReveal from "../components/ScrollReveal";
import { ServiceArt } from "../components/VisualMockups";
import { services } from "../data/content";

function Services() {
  return (
    <section className="page section">
      <div className="container">
        <ScrollReveal className="inner-hero">
          <p className="eyebrow">Echo AI Services</p>
          <h1>企業 AI 服務版圖</h1>
          <p className="lead">
            每一項服務都以「可落地」為核心，從需求到上線形成完整交付鏈，確保 AI 不是實驗，而是可持續運作的能力。
          </p>
        </ScrollReveal>
        <div className="service-stack service-stack-page">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              className={`service-stage ${index % 2 === 1 ? "reverse" : ""}`}
              delay={index * 0.06}
            >
              <div className="service-stage-copy">
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h2>{service.title}</h2>
                </div>
                <p>{service.description}</p>
                <ul className="service-bullets">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service-stage-visual">
                <ServiceArt type={service.visual} />
                <span className="visual-overlay-badge">{service.icon}</span>
                <span className="visual-overlay-note">{service.bullets[1]}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
