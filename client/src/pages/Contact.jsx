import { useState } from 'react';

const apiBaseUrl =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  request: ''
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValue = name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    if (!/^\d{10}$/.test(form.phone)) {
      setStatus({ type: 'error', message: 'Please enter a valid 10 digit phone number.' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const responseText = await response.text();
      const data = responseText ? JSON.parse(responseText) : {};

      if (!response.ok) {
        throw new Error(data.message || 'Unable to submit your request.');
      }

      setStatus({
        type: 'success',
        message: data.message || 'Thank you. Your request has been submitted successfully.'
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message.includes('JSON')
          ? 'The server returned an invalid response. Please make sure the Node server is running.'
          : error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="hero-section inner-hero contact-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Contact BridgeCFO</span>
            <h1>Let’s discuss your finance, tax or growth requirement</h1>
            <p className="lead">
              Share your details and requirement. BridgeCFO will receive your enquiry by email notification.
            </p>
            <div className="contact-points">
              <a href="tel:+919830957967">+91 9830957967</a>
              <a href="mailto:atul@bridgecfo.in">atul@bridgecfo.in</a>
              <span>Kolkata, India</span>
            </div>
          </div>

          <aside className="hero-panel glass-card">
            <span className="panel-tag">Fast Connect</span>
            <h2>Get CFO-level guidance without delay</h2>
            <p>
              Use this form for Virtual CFO, GST, income tax, fund raising, ERP, automation, audit, payroll or compliance support.
            </p>
            <div className="stack-list">
              <div><span>Email alert</span><small>To BridgeCFO inbox</small></div>
              <div><span>Structured request</span><small>Name + phone + subject</small></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container contact-section">
        <div className="contact-form-card">
          <span className="eyebrow">Submit Requirement</span>
          <h2>Request a consultation</h2>
          <p>Fill this form and click Submit Now. The backend will send an email when credentials are configured.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Name
                <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
              </label>
              <label>
                Email
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email address" required />
              </label>
              <label>
                Subject
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Example: Virtual CFO support" required />
              </label>
            </div>

            <label>
              Request
              <textarea name="request" value={form.request} onChange={handleChange} placeholder="Write your requirement here" rows="6" required />
            </label>

            {status.message && <div className={`form-alert ${status.type}`}>{status.message}</div>}

            <button className="btn btn-primary submit-btn" type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Now'}
            </button>
          </form>
        </div>

        {/* <div className="contact-info-card">
          <h3>What happens after submission?</h3>
          <div className="info-step"><b>1</b><span>Your enquiry is captured securely by the Node backend.</span></div>
          <div className="info-step"><b>2</b><span>An email is sent to the BridgeCFO contact inbox.</span></div>
          <div className="info-note">
            Configure SMTP details in the server <code>.env</code> file before deploying.
          </div>
        </div> */}
      </section>
    </main>
  );
}
