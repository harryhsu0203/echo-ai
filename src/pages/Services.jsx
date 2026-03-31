import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      </div>
      <div className="services-story">
        {services.map((service, index) => (
          <article key={service.title} className={`services-story-item ${index % 2 === 1 ? "reverse" : ""}`}>
            <div className="container services-story-layout">
              <ScrollReveal className="services-story-copy" delay={0.06}>
                <p>0{index + 1}</p>
                <div className="lv-service-title">
                  <span className="service-icon">{service.icon}</span>
                  <h2>{service.title}</h2>
                </div>
                <span>{service.description}</span>
                <ul className="lv-service-points">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="lv-explore-btn lv-service-cta">
                  預約此服務
                </Link>
              </ScrollReveal>
              <motion.div
                className="services-story-visual lv-visual-frame"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -6 }}
              >
                <ServiceArt type={service.visual} />
              </motion.div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
