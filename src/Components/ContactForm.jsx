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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSubmitted(false);

    // Instruction 1: Log values
    console.log("Form Values:", formData);

    try {
      const formBody = new URLSearchParams();

      formBody.append("fullName", formData.fullName);
      formBody.append("phoneNumber", formData.phoneNumber);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);

      const response = await fetch(
        "https://whitebricks.com/tsacademy.php",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      // Instruction 3: Check response
      console.log("Response Status:", response.status);

      const responseText = await response.text();

      console.log("Response Text:", responseText);

      if (response.status === 200) {
        setSubmitted(true);

        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong.");
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

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">

            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>

              <input
                type="text"
                id="fullName"
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
                id="email"
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
                id="phoneNumber"
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
                id="message"
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

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}