import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_82sd27c",     // ✅ Your Service ID
        "template_obofe0k",    // ✅ Your Template ID
        form.current,
        "IYCXM5ntfoKxiTc5_"    // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("✅ SUCCESS:", result.text);
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ FAILED:", error);
          alert("❌ Failed to send message. Check console for details.");
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">Get in Touch</p>
        <h6 className="section-title mb-6">Contact Me</h6>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form col-md-10 col-lg-8 m-auto"
        >
          <div className="form-row">
            {/* Name */}
            <div className="form-group col-sm-6">
              <input
                type="text"
                name="name"   // ✅ must match {{name}} in template
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group col-sm-6">
              <input
                type="email"
                name="email"  // ✅ must match {{email}} in template
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group col-sm-12">
              <textarea
                name="message"  // ✅ must match {{message}} in template
                rows="6"
                className="form-control"
                placeholder="Write Something"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="form-group col-sm-12 mt-3">
              <input
                type="submit"
                value="Send Message"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>

        <p className="mt-4">
          Or reach me directly:{" "}
          <a href="mailto:suhanitomar603@gmail.com">
            suhanitomar603@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
