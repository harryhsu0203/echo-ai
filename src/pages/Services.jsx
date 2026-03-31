import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/content";

function Services() {
  return (
    <section className="page section">
      <div className="container">
        <ScrollReveal>
          <h1>Services</h1>
          <p className="lead">
            Echo AI 提供端到端 AI 服務，從顧問、建置到系統整合，協助企業快速落地並持續優化。
          </p>
        </ScrollReveal>
        <div className="card-grid">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} className="card" delay={index * 0.06}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
