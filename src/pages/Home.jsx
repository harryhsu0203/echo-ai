import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import {
  services,
  industries,
  processSteps,
  advantages,
  caseStudies,
  faqs,
  impactStats,
  trustLogos
} from "../data/content";

function Home() {
  return (
    <>
      <section className="hero hero-light">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="tag-row">
              <span className="badge">AI Solutions</span>
              <span className="badge">Enterprise Ready</span>
              <span className="badge">Custom Integration</span>
            </div>
            <p className="eyebrow">Echo AI Official Site</p>
            <h1>Echo AI｜為企業打造真正能落地的 AI 解決方案</h1>
            <p className="hero-copy">
              我們協助企業把 AI 導入到真實營運流程，從策略規劃、系統整合到上線優化，
              讓每一次導入都能被衡量、可擴充、可持續成長。
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn">
                了解服務
              </a>
              <Link to="/contact" className="btn btn-ghost">
                預約諮詢
              </Link>
              <a
                href="https://echochat.com.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                查看 EchoChat
              </a>
            </div>
          </motion.div>
          <div className="hero-visual">
            <motion.div
              className="mockup dashboard-mockup"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="mockup-head">
                <span />
                <span />
                <span />
              </div>
              <p className="mockup-title">AI Operations Dashboard</p>
              <div className="metric-grid">
                {impactStats.slice(0, 4).map((stat) => (
                  <div key={stat.label} className="metric-card">
                    <p>{stat.value}</p>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mockup chat-mockup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
            >
              <p className="mockup-title">EchoChat Preview</p>
              <div className="chat-row left">您好，請問你們怎麼串接 LINE？</div>
              <div className="chat-row right">可於 2-4 週完成整合與上線測試。</div>
              <div className="chat-row left">可以接企業知識庫嗎？</div>
              <div className="chat-row right">可以，支援文件索引與權限控管。</div>
            </motion.div>

            <motion.div
              className="floating-chip"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <strong>+41%</strong> 問題解決率
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <ScrollReveal>
            <div className="logo-cloud">
              {trustLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <ScrollReveal key={stat.label} className="impact-card" delay={index * 0.05}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2>公司介紹</h2>
            <p className="lead">
              Echo AI 專注於企業 AI 導入，結合顧問能力與工程實作，讓 AI 不是展示，而是可穩定創造價值的核心能力。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <ScrollReveal>
            <h2>服務總覽</h2>
          </ScrollReveal>
          <div className="card-grid service-grid">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                delay={index * 0.05}
                className={`card service-card ${index === 0 ? "service-card-featured" : ""}`}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>
                  {service.title}
                  {index === 0 ? <span className="small-badge">Flagship</span> : null}
                </h3>
                <p>{service.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <ScrollReveal>
            <h2>解決方案 / 適用產業</h2>
          </ScrollReveal>
          <div className="chip-wrap">
            {industries.map((industry) => (
              <span className="chip" key={industry}>
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2>合作流程</h2>
          </ScrollReveal>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.08} className="timeline-item">
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2>為什麼選擇我們</h2>
          </ScrollReveal>
          <div className="card-grid">
            {advantages.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.06} className="card">
                <h3>0{index + 1}</h3>
                <p>{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="showcase">
            <ScrollReveal className="showcase-copy">
              <p className="eyebrow">Echo AI Product</p>
              <h2>EchoChat 精選產品展示</h2>
              <p className="lead">
                EchoChat 是 Echo AI 旗下的 AI 客服產品，可結合網站、LINE、表單與知識庫，打造企業級 24/7
                智慧服務流程。
              </p>
              <ul className="feature-list">
                <li>多通路客服整合與知識庫問答</li>
                <li>管理儀表板即時追蹤回覆品質</li>
                <li>快速接入現有 CRM / ERP 流程</li>
              </ul>
              <div className="hero-actions">
                <a
                  href="https://echochat.com.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  前往 EchoChat
                </a>
                <Link to="/contact" className="btn btn-ghost">
                  預約 Demo
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal className="showcase-ui" delay={0.08}>
              <div className="showcase-panel">
                <p>AI Chat Response</p>
                <div className="chat-row left">請問可以查詢物流狀態嗎？</div>
                <div className="chat-row right">可以，即時同步並通知客戶。</div>
                <div className="mini-stats">
                  <span>平均回覆 3.2s</span>
                  <span>滿意度 96%</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2>案例展示</h2>
          </ScrollReveal>
          <div className="card-grid cases-grid">
            {caseStudies.map((c, index) => (
              <ScrollReveal className="card case-card" key={c.company} delay={index * 0.06}>
                <div className="case-top">
                  <span className="service-icon">{c.icon}</span>
                  <h3>{c.company}</h3>
                </div>
                <p className="case-scenario">{c.scenario}</p>
                <p>{c.result}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2>FAQ</h2>
          </ScrollReveal>
          <div className="faq-list premium-faq">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.q} delay={index * 0.05} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta premium-cta">
        <div className="container">
          <ScrollReveal className="cta-panel">
            <h2>讓你的企業 AI 專案，從概念變成可衡量成效</h2>
            <p className="lead">
              Echo AI 協助你快速啟動、穩定上線並持續優化，打造真正可落地的智慧營運系統。
            </p>
            <div className="hero-actions cta-actions">
              <Link to="/contact" className="btn">
                立即預約顧問諮詢
              </Link>
              <a
                href="https://echochat.com.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                查看 EchoChat
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;
