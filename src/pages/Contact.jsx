import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  requirement: ""
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="page section">
      <div className="container contact-wrap">
        <ScrollReveal>
          <h1>Contact</h1>
          <p className="lead">
            留下需求，我們會由顧問團隊與你聯繫，協助規劃最適合的 AI 導入方案。
          </p>
        </ScrollReveal>

        <ScrollReveal className="contact-card" delay={0.08}>
          <form onSubmit={handleSubmit}>
            <label>
              姓名
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="請輸入姓名"
                required
              />
            </label>

            <label>
              電話
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="請輸入電話"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="請輸入 Email"
                required
              />
            </label>

            <label>
              需求
              <textarea
                name="requirement"
                rows="5"
                value={form.requirement}
                onChange={handleChange}
                placeholder="請描述您的 AI 導入需求"
                required
              />
            </label>

            <button type="submit" className="btn">
              送出諮詢
            </button>
          </form>
          {submitted ? (
            <p className="success-text">已收到您的需求，我們將盡快與您聯繫。</p>
          ) : null}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
