import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);

    // Clear form fields
    e.target.reset();
    setMessage("");

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact">
        <h2 className="section-title">
          Have Questions About Planetary Science?
        </h2>

        <p className="section-subtitle">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed?
          <br />
          Reach out and we'll get back to you.
        </p>

        {submitted && (
          <div className="success-message">
            Form submitted successfully!
          </div>
        )}

        <form
          className="contact-form"
          action="https://whitebricks.com/tsacademy.php"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
        >
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullname">
                Full Name <span className="required">*</span>
              </label>

              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full name"
                required
                minLength={2}
                maxLength={50}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phonenumber">
                Phone Number <span className="required">*</span>
              </label>

              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                placeholder="Please enter a valid phone number"
                maxLength={15}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength={500}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="char-count">
                {message.length} / 500 characters
              </div>
            </div>
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>

        {/* Hidden iframe prevents page navigation */}
        <iframe
          name="hidden_iframe"
          title="hidden_iframe"
          style={{ display: "none" }}
        />
      </div>
    </section>
  );
}