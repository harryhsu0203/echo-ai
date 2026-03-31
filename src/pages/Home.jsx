import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import {
  services,
  industries,
  processSteps,
  advantages,
  caseStudies,
  faqs
} from "../data/content";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow">Echo AI Official</p>
            <h1>Echo AI｜為企業打造真正能落地的 AI 解決方案</h1>
            <p className="hero-copy">
              我們協助企業從 AI 策略、技術導入到系統落地，建立可長期維護、可衡量成效的智慧化營運能力。
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
          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <p className="panel-title">AI Delivery Framework</p>
            <ul>
              <li>策略診斷與目標定義</li>
              <li>資料治理與知識建模</li>
              <li>系統整合與自動化流程</li>
              <li>部署、監控與持續優化</li>
            </ul>
          </motion.div>
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
          <div className="card-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.05} className="card">
                <h3>{service.title}</h3>
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
          <ScrollReveal>
            <h2>EchoChat 精選產品</h2>
            <p className="lead">
              EchoChat 是 Echo AI 的核心 AI 客服服務，可快速整合 FAQ、知識庫與客服流程，打造 24/7 智慧回應。
            </p>
            <a
              href="https://echochat.com.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              前往 EchoChat 官網
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal>
            <h2>案例展示</h2>
          </ScrollReveal>
          <div className="card-grid">
            {caseStudies.map((c, index) => (
              <ScrollReveal className="card" key={c.company} delay={index * 0.06}>
                <h3>{c.company}</h3>
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
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.q} delay={index * 0.05} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <ScrollReveal>
            <h2>準備好啟動你的 AI 專案了嗎？</h2>
            <p className="lead">和 Echo AI 一起，把想法變成可落地、可擴充、可持續優化的企業能力。</p>
            <Link to="/contact" className="btn">
              立即預約顧問諮詢
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;
