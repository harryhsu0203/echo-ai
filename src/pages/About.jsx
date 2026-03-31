import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <section className="page section">
      <div className="container">
        <ScrollReveal className="inner-hero">
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
        <ScrollReveal className="about-highlight" delay={0.18}>
          <h3>Why Echo AI</h3>
          <p>
            我們不是只交付模型，而是交付「可被團隊長期使用」的完整解決方案。從顧問、工程到上線後優化，都能由同一團隊持續協作。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;
