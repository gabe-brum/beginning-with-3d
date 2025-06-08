import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";

const EMAIL_ID_SERVICE = "service_xidr38s";
const TEMPLATE_ID_SERVICE = "template_7wf2u5f";
const PUBLIC_KEY = '9CmcpREbPvewxOBFr'

const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await emailJs.send(EMAIL_ID_SERVICE, TEMPLATE_ID_SERVICE, {
        from_name: form.name,
        to_name: "Gabriel",
        from_email: form.email,
        to_email: "biel.brumluz@gmail.com",
        message: form.message,
      }, PUBLIC_KEY);

      setIsLoading(false)
      alert('Your message has been sent!')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setIsLoading(false)
      console.error(error);

      alert('Something went wrong!')
    }
  };

  return (
    <section className="c-space my-20 max-w-screen-xl mx-auto">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="Terminal"
          className="hidden absolute min-h-screen inset-0 lg:block"
        />

        <div className="contact-container">
          <h3 className="head-text">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label htmlFor="email" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label htmlFor="message" className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="Arrow Up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
