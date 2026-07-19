import { Link } from 'react-router-dom';

const services = [
  ['01', 'Virtual CFO', 'MIS, budgets, cash flow, board reporting, KPI dashboards and compliance rhythm.'],
  ['02', 'Tax Services', 'GST, income tax, tax planning, notices, e-proceedings and litigation support.'],
  ['03', 'Capital & Banking', 'Fund raise support, treasury management, financial structuring and IPO readiness.'],
  ['04', 'Management Audit', 'Revenue assurance, cost control, risk matrix, SOPs and exception monitoring.'],
  ['05', 'ERP & Automation', 'ERP/SAP support, workflow digitisation, approval matrix and MIS automation.'],
  ['06', 'Corporate Compliance', 'Restructuring support, equity issue, ROC compliance, documentation and governance support.']
];

const reasons = [
  ['Partner to Fuel Growth', 'Strategic financial planning, fund raise and financial structuring.'],
  ['Compliance Shield', 'End-to-end compliance management so promoters can focus on business.'],
  ['Leakage Guard', 'Revenue assurance, cost control, process checks and exception monitoring.'],
  ['Tax Challenge Defence', 'Structured support for notices, assessments, appeals and litigation.'],
  ['IPO & Growth Readiness', 'Systems, reporting, controls and governance for scale.'],
  ['Financial Integrity', 'Clear numbers, reliable reporting and disciplined decision support.']
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">BridgeCFO for growing businesses</span>
            <h2>Strategic CFO support & more for growing businesses</h2>
            <p className="lead">Building financial strategy, growth systems, tax discipline and governance — as a strategic partner in your business journey.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/contact">Get Consultation</Link>
              <Link className="btn btn-secondary" to="/services">View Services</Link>
            </div>
            <div className="trust-row">
              <span>MSME Focused</span>
              <span>Practical CFO Leadership</span>
              <span>Compliance Ready</span>
            </div>
          </div>

          <aside className="hero-panel glass-card">
            <span className="panel-tag">CFO Gap Solution</span>
            <h2>Bridge over the CFO gap</h2>
            <p>Access senior financial expertise for day-to-day financial management, actionable MIS, fund raise support, tax planning, compliance and strategic advice.</p>
            <div className="metric-grid">
              <div className="metric"><b>25+</b><span>Years leadership</span></div>
              <div className="metric"><b>360°</b><span>Finance support</span></div>
              <div className="metric"><b>MSME</b><span>Growth focused</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container split-section">
        <div className="content-card large-card">
          <span className="eyebrow">Welcome</span>
          <h1>
            BridgeCFO – Virtual CFO Services for MSMEs, Startups & Family Businesses
          </h1>
          <p>BridgeCFO positions itself as a strategic partner and aims to become a valued part of its clients’ success stories.</p>
          <p>We bring cross-industry expertise and comprehensive support across CFO services, growth systems, fund raise, treasury management, tax planning and litigation, management audit, governance and regulatory compliance.</p>
        </div>
        <div className="content-card accent-card">
          <span className="eyebrow">Connect with CFO's expertise</span>
          <h2>Expert support across finance, tax and compliance</h2>
          <p>In today’s fast-paced and compliance-driven environment, businesses need clear, practical and professional guidance.</p>
          <div className="mini-grid">
            <div><b>Financial Management</b><span>Budgets, cash flow, MIS and KPI dashboards.</span></div>
            <div><b>Tax & Litigation</b><span>GST, income tax, notices and dispute support.</span></div>
            <div><b>Fund Raise</b><span>Banking, capital structuring and funding readiness.</span></div>
            <div><b>Governance</b><span>Compliance rhythm, SOPs and internal controls.</span></div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-head centered">
          <span className="eyebrow">Our Core Services</span>
          <h2>Practical finance leadership for better business decisions</h2>
          <p>BridgeCFO offers a focused portfolio of CFO, tax, compliance, funding, audit and automation services for growing businesses.</p>
        </div>
        <div className="services-grid">
          {services.map(([num, title, text]) => (
            <article className="service-card" key={title}>
              <div className="icon">{num}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container why-section">
        <div className="why-left">
          <span className="eyebrow light">Why Choose Us</span>
          <h2>Why BridgeCFO?</h2>
          <p>We combine strategic brain, financial expertise and execution discipline to help growing businesses bridge operational, strategic and transitional gaps.</p>
        </div>
        <div className="reason-grid">
          {reasons.map(([title, text]) => (
            <div className="reason" key={title}><b>{title}</b><span>{text}</span></div>
          ))}
        </div>
      </section>

      <section className="container audience-strip">
        {['MSMEs', 'Startups', 'Growing Companies', 'Promoters'].map((item, index) => (
          <div className="audience-card" key={item}>
            <b>{item}</b>
            <span>{['Affordable CFO expertise', 'Funding and compliance readiness', 'Systems and governance support', 'Actionable financial clarity'][index]}</span>
          </div>
        ))}
      </section>

      <section className="container final-cta">
        <h2>Ready to strengthen your finance leadership?</h2>
        <p>Get strategic CFO support, tax guidance, governance discipline and growth systems — without the cost of a full-time CFO.</p>
        <Link className="btn btn-secondary" to="/contact">Get Consultation</Link>
      </section>
    </main>
  );
}
