import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

const directLawsMenu = [
  {
    label: 'Acts',
    items: [
      ['Income-tax Act 2025', 'https://www.incometaxindia.gov.in/income-tax-act-20251'],
      ['Income-tax Act 1961', 'https://www.incometaxindia.gov.in/income-tax-act'],
      [
        'Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015',
        'https://www.incometaxindia.gov.in/black-money-undisclosed-foreign-income-and-assets-and-imposition-of-tax-act-2015'
      ],
      [
        'Prohibition of Benami Property Transactions Act, 1988',
        'https://www.incometaxindia.gov.in/prohibition-of-benami-property-transactions-act-1988'
      ],
      ['All Acts', 'https://www.incometaxindia.gov.in/all-acts']
    ]
  },
  {
    label: 'Rules',
    items: [
      ['Income-tax Rules, 2026', 'https://www.incometaxindia.gov.in/income-tax-rule-2026'],
      ['Income Tax Rules, 1962', 'https://www.incometaxindia.gov.in/income-tax-rules'],
      [
        'Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Rules, 2015',
        'https://www.incometaxindia.gov.in/black-money-undisclosed-foreign-income-and-assets-and-imposition-of-tax-rules-2015'
      ],
      ['All Rules', 'https://www.incometaxindia.gov.in/all-rules']
    ]
  }
];

const indirectLawsMenu = [
  {
    label: 'Acts',
    items: [
      ['GST Act', 'https://taxinformation.cbic.gov.in/content-page/explore-act'],
      ['Customs Act', 'https://taxinformation.cbic.gov.in/content-page/explore-act'],
      ['Central Excise Act', 'https://taxinformation.cbic.gov.in/content-page/explore-act'],
      ['Service Tax Act', 'https://taxinformation.cbic.gov.in/content-page/explore-act']
    ]
  },
  {
    label: 'Rules',
    items: [
      ['GST Rules', 'https://taxinformation.cbic.gov.in/content-page/explore-act'],
      ['Customs Rules', 'https://taxinformation.cbic.gov.in/content-page/explore-act'],
      ['Central Excise Rules', 'https://taxinformation.cbic.gov.in/content-page/explore-act'],
      ['Service Tax Rules', 'https://taxinformation.cbic.gov.in/content-page/explore-act']
    ]
  }
];

const labourCodeMenu = [
  {
    label: 'Codes',
    items: [
      [
        'Labour Codes',
        'https://www.labour.gov.in/offerings/schemes-and-services/details/labour-codes-gzNzQzMtQWa'
      ]
    ]
  }
];

function NavDropdown({ label, groups }) {
  return (
    <div className="nav-dropdown">
      <button className="nav-dropdown__trigger" type="button">
        {label} <span className="arrow">▾</span>
      </button>
      <div className="dropdown dropdown--cascading">
        {groups.length > 0 ? (
          <div className="dropdown__simple">
            {groups.map((group) => (
              <div className="dropdown__link dropdown__link--parent" tabIndex="0" key={group.label}>
                {group.label} <span className="arrow-right">›</span>
                <div className="dropdown__submenu">
                  {group.items.map(([itemLabel, href]) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown__link"
                      key={href}
                    >
                      {itemLabel} <span className="external-link-icon">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="dropdown__empty">Links will be added here.</div>
        )}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="BridgeCFO Home">
          <span className="brand-mark">B</span>
          <span>
            <strong>BridgeCFO</strong>
            <small>Finance Leadership Partner</small>
          </span>
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavDropdown label="Direct Laws" groups={directLawsMenu} />
          <NavDropdown label="Indirect Laws" groups={indirectLawsMenu} />
          <NavDropdown label="Labour Code" groups={labourCodeMenu} />
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-contact">
          <a href="tel:+919830957967">+91 9830957967</a>
          <a href="mailto:atul@bridgecfo.in">atul@bridgecfo.in</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="footer-brand"><span>B</span>BridgeCFO</div>
          <p>
            Strategic CFO support, tax advisory, compliance discipline, systems implementation and
            growth-readiness support for MSMEs, startups and growing businesses.
          </p>
          <div className="footer-badges">
            <span>Virtual CFO</span>
            <span>Tax & Compliance</span>
            <span>Fund Raising</span>
          </div>
        </div>

        <div>
          <h3>Pages</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div>
          <h3>Core Services</h3>
          <a href="/services">Virtual / Fractional CFO</a>
          <a href="/services">GST & Income Tax</a>
          <a href="/services">ERP & Automation</a>
          <a href="/services">Management Audit</a>
        </div>

        <div>
          <h3>Contact</h3>
          <a href="tel:+919830957967">+91 9830957967</a>
          <a href="mailto:atul@bridgecfo.in">atul@bridgecfo.in</a>
          <span>Kolkata, India</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} BridgeCFO. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
