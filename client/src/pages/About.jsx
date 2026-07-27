import { Link } from 'react-router-dom';

const values = [
  ['Trust', 'Ethical, transparent and responsible advisory.'],
  ['Practicality', 'Implementable solutions for real business situations.'],
  ['Ownership', 'Finance partners, not just external consultants.'],
  ['Growth Focus', 'Financial discipline aligned with value creation.']
];

export default function About() {
  return (
    <main>
      <section className="hero-section inner-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">About BridgeCFO</span>
            <h1>Your bridge to experienced CFO leadership</h1>
            <p className="lead">BridgeCFO connects MSMEs, startups and growing businesses with experienced CFOs and finance professionals on a flexible, practical and affordable basis.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">Connect with BridgeCFO</Link>
              <Link className="btn btn-secondary" to="/services">Explore Services</Link>
            </div>
          </div>
          <aside className="hero-panel glass-card">
            <span className="panel-tag">Flexible Finance Leadership</span>
            <h2>CFO expertise without the cost of a full-time CFO</h2>
            <p>For businesses that need cash-flow clarity, MIS, compliance, internal controls, fund raising support and strategic decision-making.</p>
            <div className="metric-grid">
              <div className="metric"><b>MSME</b><span>Focused</span></div>
              <div className="metric"><b>CFO</b><span>Led</span></div>
              <div className="metric"><b>360°</b><span>Support</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container split-section">
        <div className="content-card large-card">
          <span className="eyebrow">Founder’s Story</span>
          <h2>Built from long CFO leadership experience</h2>
          <p>BridgeCFO was born from a simple idea: connect growing businesses with experienced CFOs and professional experts at an affordable cost. It is an initiative of <strong>Atul Kumar Singh</strong>,a Chartered Accountant, CFO, and seasoned finance leader with extensive experience across corporate finance, building growth systems, ERP implementation and process automation, taxation, compliance, governance, and business strategy.</p>
          <p>BridgeCFO is a platform designed to connect growing businesses, MSMEs, and startups with experienced CFOs and professional experts at an affordable cost; helping them build stronger financial systems, improve compliance and controls, and achieve sustainable growth.</p>
        </div>
        <div className="content-card accent-card">
          <span className="eyebrow">Our Purpose</span>
          <h2>From routine accounting to strategic finance</h2>
          <p>BridgeCFO helps businesses build stronger financial foundations through Virtual/Fractional CFO support, tax and compliance advisory, ERP, automation, litigation support, management audit, fund raising, accounting and payroll support.</p>
          <div className="pill-wrap">
            {['Virtual CFO', 'Tax Advisory', 'Fund Raising', 'ERP', 'Automation'].map(item => <span className="pill" key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="container impact-section">
        <div>
          <span className="eyebrow">Impact Story</span>
          <h2>Making CFO intelligence accessible</h2>
          <p>The absence of CFO-level guidance can lead to weak financial visibility, avoidable compliance risks, poor working capital control and missed funding opportunities.</p>
          <p>BridgeCFO bridges this gap with hands-on, impact-oriented financial leadership for better decisions, stronger controls and growth-ready systems.</p>
        </div>
        <div className="point-list">
          <div><h3>Better Decisions</h3><p>Reliable MIS, financial reporting and business insights.</p></div>
          <div><h3>Stronger Compliance</h3><p>GST, income tax, corporate and regulatory support.</p></div>
          <div><h3>Growth Readiness</h3><p>Fund raising, automation, controls and scalable systems.</p></div>
        </div>
      </section>

      <section className="container vision-values">
        <div className="content-card">
          <span className="eyebrow">Our Vision</span>
          <h2>To become the trusted CFO platform for growing businesses</h2>
          <p>Our vision is to build BridgeCFO as a trusted meeting point where MSMEs, startups and growth-oriented businesses can access the right financial expertise at the right stage of their journey.</p>
        </div>
        <div className="value-grid">
          {values.map(([title, text]) => (
            <div className="value-card" key={title}><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>

      <section className="container final-cta">
        <h2>BridgeCFO is your bridge to experienced financial leadership.</h2>
        <p>Strategic CFO support for MSMEs, startups and growing businesses — without the cost of a full-time CFO.</p>
        <Link className="btn btn-secondary" to="/contact">Start a Conversation</Link>
      </section>
    </main>
  );
}
