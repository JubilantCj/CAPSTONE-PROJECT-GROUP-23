import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.phoneNumber.trim() &&
    isValidEmail(formData.email) &&
    formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSubmitted(false);

    if (!isFormValid) {
      setError("Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append("fullName", formData.fullName.trim());
      formBody.append("phoneNumber", formData.phoneNumber.trim());
      formBody.append("email", formData.email.trim());
      formBody.append("message", formData.message.trim());

      const response = await fetch(
        "https://whitebricks.com/tsacademy.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      const responseText = await response.text();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(responseText || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
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

        {error && <div className="error-message">{error}</div>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
                </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
                </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone Number <span className="required">*</span>
                </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                maxLength={500}
                required
              />

              <div className="char-count">
                {formData.message.length} / 500 characters
              </div>
            </div>

          </div>

          <button
            className="submit-btn"
            type="submit"
            disabled={!isFormValid || loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}