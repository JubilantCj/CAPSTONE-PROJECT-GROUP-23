import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contact: "",
    source: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        source: checked
          ? [...prev.source, value]
          : prev.source.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "message") setMessage(value);
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const response = await fetch(
      "https://whitebricks.com/tsacademy.php",
      {
        method: "POST",
        body: new FormData(e.target),
      }
    );

    const data = await response.text();

    console.log(data);

    alert("Form submitted successfully!");

  } catch (error) {

    console.log(error);

    alert("Something went wrong.");
  }
};

  return (
    <section id="contact" className="contact">
      <h2>Have Questions About Planetary Science?</h2>
      <p>
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed?
        <br />
        Reach out and we&apos;ll get back to you.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group half-width-left">
          <label htmlFor="name" className="required">
            Full Name
          </label>
          <input
            className="search"
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            required
            minLength={2}
            maxLength={50}
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group half-width-right">
          <label htmlFor="email" className="required">
            Email
          </label>
          <input
            className="search"
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group half-width-left">
          <label htmlFor="city" className="required">
            City
          </label>
          <select
            className="search"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Choose city</option>
            <option value="lagos">Lagos</option>
            <option value="abuja">Abuja</option>
            <option value="portharcourt">Port Harcourt</option>
            <option value="kano">Kano</option>
            <option value="ibadan">Ibadan</option>
            <option value="enugu">Enugu</option>
            <option value="calabar">Calabar</option>
            <option value="owerri">Owerri</option>
            <option value="benin">Benin</option>
            <option value="jos">Jos</option>
          </select>
        </div>

        <div className="form-group half-width-right">
          <label htmlFor="phone" className="required">
            Phone Number
          </label>
          <input
            className="search"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Please enter a valid phone number"
            maxLength={15}
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group message-area">
          <label htmlFor="message" className="required">
            Message
          </label>
          <textarea
            className="search"
            id="message"
            name="message"
            placeholder="Enter your message"
            maxLength={500}
            required
            value={formData.message}
            onChange={handleChange}
          />
          <div className="char-count">{message.length} / 500 characters</div>
        </div>

        <div className="form-group options-area">
          <div className="radio-group">
            <label>How should we contact you?</label>
            <div className="radio-options">
              {["Phone", "Email", "Both"].map((opt) => (
                <label key={opt}>
                  <input
                    type="radio"
                    name="contact"
                    value={opt.toLowerCase()}
                    required
                    checked={formData.contact === opt.toLowerCase()}
                    onChange={handleChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="checkbox-group">
            <label>How did you hear about us?</label>
            <div className="checkbox-options">
              {["Friend", "TS Academy", "Others"].map((src) => (
                <label key={src}>
                  <input
                    type="checkbox"
                    name="source"
                    value={src}
                    checked={formData.source.includes(src)}
                    onChange={handleChange}
                  />
                  {src}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group">
          <button className="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
