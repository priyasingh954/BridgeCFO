import { Link } from 'react-router-dom';

const services = [
  ['01', 'Virtual / Fractional CFO', 'Strategic financial management, budgetary control, cash-flow management, financial reporting, ROI improvement, growth systems and team capacity building.', ['MIS', 'Cash Flow', 'Budgeting']],
  ['02', 'Tax Services', 'Corporate taxation, GST, income tax, lower tax deduction certificate, registrations, e-proceedings, notice replies and compliance training.', ['GST', 'Income Tax', 'Notices']],
  ['03', 'Corporate Compliance', 'Compliance supervision, documentation, governance support, corporate restructuring, due diligence, valuation, negotiation and transaction support.', ['ROC', 'Governance', 'Due Diligence']],
  ['04', 'Transfer Pricing', 'Review of related-party transactions, ALP discovery, TP documentation, TP study reports, audit compliance and certification support.', ['ALP', 'TP Study', 'Certification']],
  ['05', 'ERP Implementation', 'Requirement assessment, vendor evaluation, commercial process review, system configuration, data migration, training and go-live support.', ['ERP', 'Migration', 'Go Live']],
  ['06', 'Process Automation', 'Identification of manual processes, process mapping, vendor evaluation, system configuration, training, change management and support.', ['Automation', 'Process Map', 'Change']],
  ['07', 'Management Audit', 'Internal audit, process audit, revenue and expense audit, special audit, due diligence and control improvement for stronger governance.', ['Internal Audit', 'Controls', 'Risk']],
  ['08', 'Litigation Support', 'Income tax litigation, GST litigation, ROC litigation, notice handling, reply drafting, documentation support and representation assistance.', ['GST Litigation', 'Income Tax', 'ROC']],
  ['09', 'Loan & Fund Raising', 'Fund raising advisory, loan syndication, due diligence and compliance support, documentation and post-fund-raising assistance.', ['Loan', 'Funding', 'DD']],
  ['10', 'Accounting & Payroll', 'Accounting services, accounts outsourcing, payroll management and supervision support to strengthen routine finance operations.', ['Accounts', 'Payroll', 'Outsourcing']]
];

const journey = [
  ['Understand the business', 'We assess your finance, compliance, systems, reporting and growth needs.'],
  ['Design the support model', 'We define the right mix of CFO, tax, audit, ERP, automation or funding support.'],
  ['Execute with ownership', 'We work with promoters, teams, bankers, auditors and consultants to implement practical solutions.'],
  ['Build growth readiness', 'We strengthen MIS, compliance discipline, controls, funding preparation and scalable processes.']
];

export default function Services() {
  return (
    <main>
      <section className="hero-section inner-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">What we offer</span>
            <h1>Integrated CFO, tax and growth advisory services</h1>
            <p className="lead">BridgeCFO brings strategic finance leadership, compliance depth and execution support to MSMEs, startups and growing businesses — without the cost of a full-time CFO.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#services">Explore Services</a>
              <Link className="btn btn-secondary" to="/contact">Discuss Requirement</Link>
            </div>
          </div>
          <aside className="hero-panel glass-card">
            <span className="panel-tag">Service Model</span>
            <h2>From numbers to decisions. From compliance to growth.</h2>
            <p>Our model combines CFO-level thinking with hands-on support across finance, tax, systems, controls, fund raising and business improvement.</p>
            <div className="stack-list">
              <div><span>Virtual / Fractional CFO</span><small>Strategy + MIS</small></div>
              <div><span>Tax & Compliance</span><small>GST + Income Tax</small></div>
              <div><span>Systems & Automation</span><small>ERP + Process</small></div>
              <div><span>Funding & Audit</span><small>Capital + Controls</small></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container quick-services">
        {[
          ['vCFO', 'Budgeting, cash flow, MIS, profitability and growth systems.'],
          ['Tax', 'GST, income tax, notices, e-proceedings and litigation support.'],
          ['Compliance', 'Corporate, ROC, governance, documentation and supervision.'],
          ['Automation', 'ERP implementation, process mapping and system integration.'],
          ['Funding', 'Loan syndication, due diligence and post-fund-raising support.']
        ].map(([title, text]) => <div className="quick-card" key={title}><b>{title}</b><span>{text}</span></div>)}
      </section>

      <section className="container section-block" id="services">
        <div className="section-head centered">
          <span className="eyebrow">Service Portfolio</span>
          <h2>Everything a growing business needs from finance leadership</h2>
          <p>Choose one service, combine multiple areas, or engage BridgeCFO as your long-term finance partner.</p>
        </div>
        <div className="services-grid portfolio-grid">
          {services.map(([num, title, text, tags]) => (
            <article className="service-card" key={title}>
              <div className="icon">{num}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="tags">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="container engagement-section">
        <div className="engagement-left">
          <span className="eyebrow light">How we engage</span>
          <h2>Flexible support. CFO-level impact.</h2>
          <p>BridgeCFO can work as a virtual CFO, project advisor, compliance partner, system implementation guide or funding support team — depending on the stage and requirement of your business.</p>
        </div>
        <div className="journey-list">
          {journey.map(([title, text], index) => (
            <div className="journey-step" key={title}>
              <div className="num">{index + 1}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="container audience-strip">
        {[
          ['MSMEs', 'Structured finance leadership'],
          ['Startups', 'Investor and growth readiness'],
          ['Family Businesses', 'Controls and governance'],
          ['Growing Companies', 'Systems, funding and scale']
        ].map(([title, text]) => <div className="audience-card" key={title}><b>{title}</b><span>{text}</span></div>)}
      </section>

      <section className="container final-cta">
        <h2>Need CFO-level guidance for your business?</h2>
        <p>Let BridgeCFO help you bring clarity to numbers, discipline to compliance, strength to controls and confidence to growth decisions.</p>
        <Link className="btn btn-secondary" to="/contact">Start a Conversation</Link>
      </section>
    </main>
  );
}
