import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { ServiceArt, CaseArt } from "../components/VisualMockups";
import { caseStudies } from "../data/content";

const heroKpis = [
  { value: "63%", label: "Response Time Reduced" },
  { value: "2.7x", label: "Knowledge Efficiency" },
  { value: "24/7", label: "Continuous Operation" }
];

const serviceStories = [
  {
    title: "AI Customer Service",
    subtitle: "Human-like support designed for enterprise scale.",
    type: "chat"
  },
  {
    title: "AI Automation",
    subtitle: "Turn repetitive operations into intelligent workflows.",
    type: "automation"
  },
  {
    title: "AI Integration",
    subtitle: "Connect systems and data into one intelligence layer.",
    type: "workflow"
  }
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
            <ServiceArt type="knowledge" />
          </motion.div>

          <motion.div
            className="lv-hero-chat"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="lv-chat-shell">
              <p>EchoChat</p>
              <div className="chat-row left">你好，請問如何導入 AI 客服？</div>
              <div className="chat-row right">可 2~4 週完成 MVP，並串接知識庫。</div>
              <div className="chat-row left">可以和 LINE 一起用嗎？</div>
              <div className="chat-row right">可以，支援 LINE / Web / CRM 同步。</div>
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
        {serviceStories.map((story, index) => (
          <section key={story.title} className={`lv-service-chapter ${index % 2 === 1 ? "reverse" : ""}`}>
            <div className="container lv-service-layout">
              <ScrollReveal className="lv-service-text" delay={0.08}>
                <p>0{index + 1}</p>
                <h2>{story.title}</h2>
                <span>{story.subtitle}</span>
              </ScrollReveal>

              <motion.div
                className="lv-service-image"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <ServiceArt type={story.type} />
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
            <span>Conversational AI designed for real customer interactions.</span>
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
            <div className="lv-chat-shell lv-chat-large">
              <p>LINE Style Conversation</p>
              <div className="chat-row left">請問今天還有預約名額嗎？</div>
              <div className="chat-row right">您好，今晚 19:30 仍有 2 位名額。</div>
              <div className="chat-row left">那我先保留兩位。</div>
              <div className="chat-row right">已完成保留，稍後發送確認通知。</div>
              <div className="chat-row left">可同步 CRM 嗎？</div>
              <div className="chat-row right">可同步，並自動寫入顧客標籤資料。</div>
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
                <CaseArt type={item.visual} />
                <div className="lv-case-copy">
                  <h3>{item.company}</h3>
                  <p>{item.scenario}</p>
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
