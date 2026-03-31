import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { ServiceArt, CaseArt } from "../components/VisualMockups";
import { services, caseStudies } from "../data/content";

const heroKpis = [
  { value: "63%", label: "回覆時間下降" },
  { value: "2.7x", label: "知識檢索效率" },
  { value: "24/7", label: "持續服務覆蓋" }
];

const heroConversation = [
  { id: 1, role: "user", avatar: "U", text: "你好，請問如何導入 AI 客服？", time: "09:41" },
  { id: 2, role: "ai", avatar: "AI", text: "可 2~4 週完成 MVP，並串接知識庫。", time: "09:41" },
  { id: 3, role: "user", avatar: "U", text: "可以和 LINE 一起用嗎？", time: "09:42" },
  { id: 4, role: "ai", avatar: "AI", text: "可以，支援 LINE / Web / CRM 同步。", time: "09:42" }
];

const productConversation = [
  { id: 1, role: "user", avatar: "U", text: "請問今天還有預約名額嗎？", time: "10:03" },
  { id: 2, role: "ai", avatar: "AI", text: "今晚 19:30 仍有 2 位名額。", time: "10:03" },
  { id: 3, role: "user", avatar: "U", text: "那我先保留兩位。", time: "10:04" },
  { id: 4, role: "ai", avatar: "AI", text: "已完成保留，稍後發送確認通知。", time: "10:04" },
  { id: 5, role: "user", avatar: "U", text: "可同步 CRM 嗎？", time: "10:05" },
  { id: 6, role: "ai", avatar: "AI", text: "可同步，並自動寫入顧客標籤資料。", time: "10:05" }
];

function Home() {
  return (
    <>
      <section className="lv-hero">
        <div className="lv-hero-gradient" />
        <div className="lv-hero-grid" />
        <div className="container lv-hero-stage">
          <motion.div
            className="lv-hero-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="lv-brand">Echo AI</p>
            <h1>AI Solutions for Business</h1>
            <a href="#brand-services" className="lv-explore-btn">
              Explore
            </a>
          </motion.div>

          <motion.div
            className="lv-hero-dashboard"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.12 }}
          >
            <div className="lv-visual-frame">
              <ServiceArt type="knowledge" />
            </div>
          </motion.div>

          <motion.div
            className="lv-hero-chat"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="lv-chat-shell lv-visual-frame">
              <div className="lv-chat-head">
                <div className="lv-chat-agent">
                  <span className="lv-chat-avatar is-ai">AI</span>
                  <div>
                    <strong>EchoChat</strong>
                    <small>Enterprise Assistant</small>
                  </div>
                </div>
                <span className="lv-chat-status">online</span>
              </div>
              <div className="lv-chat-thread">
                {heroConversation.map((item) => (
                  <div key={item.id} className={`lv-chat-item ${item.role === "ai" ? "is-ai" : "is-user"}`}>
                    <span className={`lv-chat-avatar ${item.role === "ai" ? "is-ai" : ""}`}>{item.avatar}</span>
                    <div className="lv-chat-bubble-wrap">
                      <p>{item.text}</p>
                      <small>{item.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lv-float-kpi"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {heroKpis.map((kpi) => (
              <div key={kpi.label}>
                <strong>{kpi.value}</strong>
                <span>{kpi.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="lv-manifesto">
        <div className="container">
          <ScrollReveal className="lv-manifesto-copy">
            <h2>極簡表達，極致交付。</h2>
            <p>
              Echo AI 將策略、技術與體驗融合成可落地的企業 AI 解決方案。每一個專案都從真實營運情境出發，
              讓 AI 成為可以持續成長的商業資產。
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="brand-services" className="lv-service-story">
        <div className="container lv-service-headline">
          <ScrollReveal>
            <p className="eyebrow">Services</p>
            <h2>每個服務都是完整交付場景</h2>
          </ScrollReveal>
        </div>
        {services.map((service, index) => (
          <section key={service.title} className={`lv-service-chapter ${index % 2 === 1 ? "reverse" : ""}`}>
            <div className="container lv-service-layout">
              <ScrollReveal className="lv-service-text" delay={0.08}>
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
                className="lv-service-image lv-visual-frame"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <ServiceArt type={service.visual} />
              </motion.div>
            </div>
          </section>
        ))}
      </section>

      <section className="lv-echochat">
        <div className="container lv-echochat-layout">
          <ScrollReveal className="lv-echochat-copy">
            <p>Echo AI Product</p>
            <h2>EchoChat</h2>
            <span>Conversational AI designed for real customer interactions with enterprise workflow integration.</span>
            <a href="https://echochat.com.tw" target="_blank" rel="noopener noreferrer" className="lv-explore-btn">
              前往 echochat.com.tw
            </a>
          </ScrollReveal>

          <motion.div
            className="lv-echochat-media"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85 }}
          >
            <div className="lv-chat-shell lv-chat-large lv-visual-frame">
              <div className="lv-chat-head">
                <div className="lv-chat-agent">
                  <span className="lv-chat-avatar is-ai">AI</span>
                  <div>
                    <strong>LINE Style Conversation</strong>
                    <small>客服 / 預約 / CRM 一體化</small>
                  </div>
                </div>
                <span className="lv-chat-status">active</span>
              </div>
              <div className="lv-chat-thread">
                {productConversation.map((item) => (
                  <div key={item.id} className={`lv-chat-item ${item.role === "ai" ? "is-ai" : "is-user"}`}>
                    <span className={`lv-chat-avatar ${item.role === "ai" ? "is-ai" : ""}`}>{item.avatar}</span>
                    <div className="lv-chat-bubble-wrap">
                      <p>{item.text}</p>
                      <small>{item.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="lv-case-story">
        <div className="container">
          <ScrollReveal>
            <h2>Visual Business Stories</h2>
          </ScrollReveal>
          <div className="lv-case-stack">
            {caseStudies.map((item, index) => (
              <ScrollReveal key={item.company} className="lv-case-scene" delay={index * 0.08}>
                <div className="lv-case-media lv-visual-frame">
                  <CaseArt type={item.visual} />
                </div>
                <div className="lv-case-copy">
                  <h3>{item.company}</h3>
                  <p>{item.scenario}</p>
                  <span>{item.result}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="lv-cta">
        <div className="container">
          <ScrollReveal className="lv-cta-panel">
            <h2>Build the next AI layer for your business.</h2>
            <Link to="/contact" className="lv-explore-btn">
              Start
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;
