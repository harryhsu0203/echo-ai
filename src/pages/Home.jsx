import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { ServiceArt, CaseArt } from "../components/VisualMockups";
import {
  services,
  processSteps,
  caseStudies,
  impactStats,
  trustLogos,
  heroBadges
} from "../data/content";

function Home() {
  return (
    <>
      <section className="hero hero-premium">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="tag-row">
              {heroBadges.map((badge) => (
                <span className="badge" key={badge}>
                  {badge}
                </span>
              ))}
            </div>
            <p className="eyebrow">Echo AI | Official Website</p>
            <h1>Echo AI｜為企業打造真正能落地的 AI 解決方案</h1>
            <p className="hero-copy">
              以策略顧問、產品設計與技術交付整合一體，協助企業建立真正可擴充的 AI 能力，從第一個應用場景快速落地，
              到跨部門規模化導入。
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
            <div className="hero-points">
              <span>快速導入</span>
              <span>企業等級安全</span>
              <span>可持續優化</span>
            </div>
          </motion.div>
          <div className="hero-scene">
            <motion.div
              className="scene-card dashboard-window"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <div className="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="scene-title">AI Operations Dashboard</p>
              <div className="dashboard-grid">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="kpi-cell">
                    <p>{stat.value}</p>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="scene-card chat-phone"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="scene-title">EchoChat Live Assistant</p>
              <div className="chat-row left">您好，請問你們怎麼串接 LINE？</div>
              <div className="chat-row right">可於 2~4 週完成串接並上線。</div>
              <div className="chat-row left">可以接企業知識庫嗎？</div>
              <div className="chat-row right">可以，支援文件索引與權限控管。</div>
            </motion.div>
            <motion.div
              className="float-panel"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <strong>+41%</strong>
              <span>客戶問題解決率</span>
            </motion.div>
            <motion.div
              className="float-panel float-panel-second"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <strong>3.2s</strong>
              <span>平均回覆速度</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section intro-band">
        <div className="container">
          <div className="intro-band-inner">
            <ScrollReveal className="narrow-copy">
              <h2>不只做 AI 展示，而是交付可運作系統</h2>
              <p className="lead">
                Echo AI 以「可落地」為核心，從需求診斷、資料架構、系統串接到成效追蹤，協助企業建立可以持續擴張的 AI 營運能力。
              </p>
            </ScrollReveal>
            <ScrollReveal className="intro-visual" delay={0.1}>
              <div className="intro-visual-card">
                <p>AI Delivery Blueprint</p>
                <div className="intro-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal className="logo-cloud" delay={0.05}>
            {trustLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section id="services" className="section services-redesign">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">Core Services</p>
            <h2>服務不是卡片，而是完整可落地方案</h2>
          </ScrollReveal>
          <div className="service-stack">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                delay={index * 0.04}
                className={`service-stage ${index % 2 === 1 ? "reverse" : ""}`}
              >
                <div className="service-stage-copy">
                  <div className="service-header">
                    <span className="service-icon">{service.icon}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="service-bullets">
                    {service.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className="service-stage-visual"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ServiceArt type={service.visual} />
                  <span className="visual-overlay-badge">{service.icon}</span>
                  <span className="visual-overlay-note">{service.bullets[0]}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt echochat-product">
        <div className="container">
          <div className="echochat-layout">
            <ScrollReveal className="echochat-copy">
              <p className="eyebrow">Echo AI Product</p>
              <h2>EchoChat 產品展示</h2>
              <p className="lead">
                EchoChat 是 Echo AI 旗下 AI 客服方案，提供類 LINE 的自然對話、知識庫檢索與流程整合能力，讓客服能同時兼顧效率與品質。
              </p>
              <ul className="feature-list">
                <li>真實對話體驗與意圖理解</li>
                <li>客服流程與預約通知整合</li>
                <li>Dashboard 即時追蹤成效</li>
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
            <ScrollReveal className="echochat-ui-stack" delay={0.1}>
              <div className="line-chat-card">
                <div className="line-top">LINE Official Chat</div>
                <div className="chat-row left">您好，請問今天還有位置嗎？</div>
                <div className="chat-row right">您好，19:30 還有 2 位，是否為您保留？</div>
                <div className="chat-row left">好，先幫我保留。</div>
                <div className="chat-row right">已保留完成，稍後推播確認訊息給您。</div>
              </div>
              <div className="echochat-mini-dashboard">
                <p>Conversation Analytics</p>
                <div className="mini-bar-list">
                  <span style={{ width: "82%" }} />
                  <span style={{ width: "70%" }} />
                  <span style={{ width: "64%" }} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="impact-ribbon">
            {impactStats.map((stat, index) => (
              <ScrollReveal key={stat.label} className="impact-card" delay={index * 0.08}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-mosaic">
        <div className="container">
          <ScrollReveal>
            <h2>真實商業場景案例</h2>
          </ScrollReveal>
          <div className="mosaic-grid">
            {caseStudies.map((item, index) => (
              <ScrollReveal
                key={item.company}
                className={`mosaic-card ${index === 0 ? "mosaic-card-wide" : ""}`}
                delay={index * 0.06}
              >
                <CaseArt type={item.visual} />
                <div className="case-meta">
                  <div className="case-title">
                    <span className="service-icon">{item.icon}</span>
                    <h3>{item.company}</h3>
                  </div>
                  <p className="case-scenario">{item.scenario}</p>
                  <p>{item.result}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-track">
        <div className="container">
          <ScrollReveal>
            <h2>合作流程</h2>
          </ScrollReveal>
          <div className="process-line">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.08} className="process-item">
                <span className="process-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta premium-cta">
        <div className="container">
          <ScrollReveal className="cta-panel">
            <h2>打造下一個企業級 AI 成長曲線</h2>
            <p className="lead">
              我們將策略、產品、技術與營運串成一條可落地的交付路徑，讓 AI 真正成為你公司的競爭優勢。
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
