import { Link } from "react-router-dom";
import { services, caseStudies, homepageVisuals } from "../data/content";

function Home() {
  return (
    <>
      <section className="section simple-section">
        <div className="container split-row">
          <div className="split-content">
            <p className="eyebrow">Echo AI</p>
            <h1>企業人工智慧解決方案</h1>
            <p className="lead">
              Echo AI 協助企業導入可落地的人工智慧方案，從需求盤點到系統上線，建立可長期維運的數位能力。
            </p>
            <div className="simple-actions">
              <Link to="/services" className="btn">
                了解服務項目
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                聯絡我們
              </Link>
            </div>
          </div>
          <div className="split-media">
            <img className="content-image" src={homepageVisuals.hero.url} alt={homepageVisuals.hero.alt} loading="eager" />
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container">
          <h2>服務項目</h2>
          <div className="split-list">
            {services.map((service, index) => (
              <article key={service.title} className={`split-row split-block ${index % 2 === 1 ? "reverse" : ""}`}>
                <div className="split-media">
                  <img className="content-image" src={service.image} alt={service.imageAlt} loading="lazy" />
                </div>
                <div className="split-content split-card">
                  <div className="service-simple-head">
                    <span className="service-icon">{service.icon}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="service-bullets">
                    {service.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-small">
                    預約諮詢
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container split-row reverse">
          <div className="split-media">
            <img
              className="content-image"
              src={homepageVisuals.echochat.url}
              alt={homepageVisuals.echochat.alt}
              loading="lazy"
            />
          </div>
          <div className="split-content split-card">
            <h2>EchoChat 產品介紹</h2>
            <p className="lead">
              EchoChat 提供企業可部署的對話式客服，支援 LINE 與知識庫整合，協助客服流程穩定運作。
            </p>
            <div className="simple-actions">
              <a href="https://echochat.com.tw" target="_blank" rel="noopener noreferrer" className="btn">
                前往 EchoChat
              </a>
              <Link to="/contact" className="btn btn-ghost">
                預約展示
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container">
          <h2>案例</h2>
          <div className="split-list">
            {caseStudies.map((item, index) => (
              <article key={item.company} className={`split-row split-block ${index % 2 === 1 ? "reverse" : ""}`}>
                <div className="split-media">
                  <img className="content-image" src={item.image} alt={item.imageAlt} loading="lazy" />
                </div>
                <div className="split-content split-card">
                  <h3>{item.company}</h3>
                  <p>{item.scenario}</p>
                  <p>{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section simple-section">
        <div className="container split-card">
          <h2>開始規劃你的人工智慧導入</h2>
          <p className="lead">由顧問團隊先了解你的情境與目標，協助你制定可落地的導入路徑。</p>
          <div className="simple-actions">
            <Link to="/contact" className="btn">
              立即預約諮詢
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
