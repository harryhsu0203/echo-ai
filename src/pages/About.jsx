import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <section className="page section">
      <div className="container">
        <ScrollReveal>
          <h1>About Echo AI</h1>
          <p className="lead">
            我們相信 AI 的價值在於解決真實商業問題。Echo AI 致力於讓每一個導入決策都能對應清楚的效益與可執行路徑。
          </p>
        </ScrollReveal>
        <div className="card-grid">
          <ScrollReveal className="card">
            <h2>我們的理念</h2>
            <p>以成果為導向，讓 AI 成為企業日常運作的一部分，而非短期專案。</p>
          </ScrollReveal>
          <ScrollReveal className="card" delay={0.1}>
            <h2>我們的方法</h2>
            <p>先釐清業務目標，再設計資料與系統架構，最後以可驗證成果快速迭代。</p>
          </ScrollReveal>
          <ScrollReveal className="card" delay={0.16}>
            <h2>我們的承諾</h2>
            <p>提供專業透明的合作流程，確保每個里程碑都有明確交付與可量化成效。</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;
