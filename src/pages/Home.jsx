import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { services, caseStudies, homepageVisuals } from "../data/content";

const serviceHighlights = [
  {
    ...services[0],
    summary: "讓客服服務全天候在線，快速回應客戶問題並維持一致品質。"
  },
  {
    ...services[3],
    summary: "把重複工作交給自動化流程，提升營運效率並降低人力負擔。"
  },
  {
    ...services[1],
    summary: "從策略到系統上線，建立能長期運作且可擴充的智慧基礎。"
  }
];

function Home() {
  return (
    <>
      <section className="brand-full brand-hero">
        <img className="brand-bg-image" src={homepageVisuals.hero.url} alt={homepageVisuals.hero.alt} loading="eager" />
        <div className="brand-layer brand-layer-hero" />
        <div className="brand-hero-inner">
          <ScrollReveal className="brand-overlay-card">
            <p className="brand-eyebrow">Echo AI 官方網站</p>
            <h1>讓人工智慧成為企業成長引擎</h1>
            <p>
              我們將策略、產品與工程整合為一條可落地的導入路徑，協助企業在真實營運情境中穩定使用人工智慧能力。
            </p>
            <div className="brand-actions">
              <Link to="/services" className="btn">
                了解服務項目
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                立即聯絡我們
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="brand-narrow">
        <div className="brand-shell narrow">
          <ScrollReveal className="brand-manifesto">
            <h2>不只展示人工智慧，而是交付可運作成果</h2>
            <p>
              Echo AI 以品牌視角與商業邏輯出發，打造兼具視覺體驗與實務效益的企業智慧解決方案，
              讓每一次導入都能真正服務營運與成長目標。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {serviceHighlights.map((service, index) => (
        <section
          key={service.title}
          className={`brand-full brand-service-panel ${index % 2 === 1 ? "align-right" : "align-left"}`}
        >
          <img className="brand-bg-image" src={service.image} alt={service.imageAlt} loading="lazy" />
          <div className="brand-layer brand-layer-panel" />
          <div className={`brand-panel-inner ${index % 2 === 1 ? "is-right" : ""}`}>
            <ScrollReveal className="brand-panel-copy" delay={index * 0.08}>
              <p className="brand-index">0{index + 1}</p>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <div className="brand-actions">
                <Link to="/services" className="btn">
                  了解更多
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  預約諮詢
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="brand-full brand-echochat">
        <img
          className="brand-bg-image"
          src={homepageVisuals.echochat.url}
          alt={homepageVisuals.echochat.alt}
          loading="lazy"
        />
        <div className="brand-layer brand-layer-echochat" />
        <div className="brand-panel-inner is-right">
          <ScrollReveal className="brand-panel-copy">
            <p className="brand-eyebrow">EchoChat 產品方案</p>
            <h2>把每一次對話，轉化為品牌服務體驗</h2>
            <p>
              EchoChat 以真實客服情境設計，整合 LINE 與知識庫流程，協助企業建立穩定、即時、可擴充的對話式服務能力。
            </p>
            <div className="brand-actions">
              <a href="https://echochat.com.tw" target="_blank" rel="noopener noreferrer" className="btn">
                前往 EchoChat
              </a>
              <Link to="/contact" className="btn btn-ghost">
                預約展示
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="brand-narrow brand-case-section">
        <div className="brand-shell">
          <ScrollReveal className="brand-case-head">
            <h2>產業案例</h2>
            <p>每一個案例都來自真實營運需求，並以可量化成果驗證導入成效。</p>
          </ScrollReveal>
          <div className="brand-case-grid">
            {caseStudies.map((item, index) => (
              <ScrollReveal key={item.company} className="brand-case-card" delay={index * 0.06}>
                <img className="brand-case-image" src={item.image} alt={item.imageAlt} loading="lazy" />
                <div className="brand-case-layer" />
                <div className="brand-case-copy">
                  <h3>{item.company}</h3>
                  <p>{item.scenario}</p>
                  <span>{item.result}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-full brand-cta">
        <img className="brand-bg-image" src={services[2].image} alt={services[2].imageAlt} loading="lazy" />
        <div className="brand-layer brand-layer-cta" />
        <div className="brand-cta-inner">
          <ScrollReveal className="brand-overlay-card brand-overlay-center">
            <h2>準備好打造你的企業智慧能力了嗎？</h2>
            <p>立即與顧問團隊洽談，規劃你的下一個人工智慧成長里程碑。</p>
            <div className="brand-actions">
              <Link to="/contact" className="btn">
                立即預約諮詢
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;
