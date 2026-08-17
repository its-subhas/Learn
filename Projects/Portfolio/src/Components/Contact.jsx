import "./Contact.css";
import { useRef, useState, useContext } from "react";
import DataContext from "../Store/DataContext";

const Contact = () => {
  const { contactsData } = useContext(DataContext);

  const formRef = useRef();
  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  {
    /* DATA */
  }
  const socialData = contactsData.socialData;
  const emailData = contactsData.emailData;
  {
    /* MESSAGE DATA SUBMIT */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ message: "Sending...", type: "loading" });

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formspree.io/f/xbdwozre", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formRef.current.reset();

        {
          /* MESSAGE SENT SUCCESS */
        }
        setStatus({
          message: "✓ Message sent successfully !",
          type: "success",
        });

        setTimeout(() => {
          setStatus({ message: "", type: "" });
        }, 3000);
      } else {
        {
          /* MESSAGE SENT FAILED */
        }
        setStatus({
          message: "✗ Failed to send message.",
          type: "error",
        });

        setTimeout(() => {
          setStatus({ message: "", type: "" });
        }, 5000);
      }
    } catch {
      {
        /* MESSAGE SENT FAILED OTHER REASONS */
      }
      setStatus({
        message: "✗ Something went wrong !",
        type: "error",
      });

      setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 5000);
    }
  };

  {
    /* SOCIAL ITEMS FUNCTION */
  }
  const renderSocial = (item, index) => (
    /* SOCIAL ITEMS CONTAINER BOOT STRAP */
    <div className="contactCard" key={index}>
      {/* SOCIAL ITEMS IMAGE */}
      <img src={item.img} alt={item.name} />

      {/* SOCIAL ITEMS BODY CONTAINER BOOT STRAP */}
      <div className="contactCardBody">
        {/* SOCIAL ITEMS P PARAGRAPH BOOT STRAP */}
        <p className="contactCardText">{item.name}</p>

        {/* SOCIAL ITEMS A LINK */}
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div>
    </div>
  );

  {
    /* EMAIL ITEMS FUNCTION */
  }
  const renderEmail = (item, index) => (
    /* EMAIL ITEMS COINTAINER BOOT STRAP */
    <div className="contactCard" key={index}>
      {/* EMAIL ITEMS IMAGE */}
      <img src={item.img} alt={item.name} />

      {/* EMAIL ITEMS BODY CONTAINER BOOT STRAP */}
      <div className="contactCardBody">
        {/* EMAIL ITEMS P PARAGRAPH BOOT STRAP */}
        <p className="contactCardText">{item.name}</p>

        {/* EMAIL ITEMS A LINK */}
        <a href={item.link}>Send Email</a>
      </div>
    </div>
  );

  return (
    /* SECTION CONTACT */
    <section className="contact">
      {/* SECTION CONTACT H1 HEADING BOOT STRAP */}
      <h1 className="text-center contactMainTitle">Contact</h1>

      {/* SECTION CONTACT P PARAGRAPH BOOT STRAP */}
      <p className="text-center contactSubtitle">Connect To Me</p>

      {/* SECTION H2 HEADING SOCIAL */}
      <h2 className="socialHeadingContact">Social</h2>
      {/* SECTION HR */}
      <hr />

      {/* SECTION SOCIAL COINTAINER */}
      <div className="contactContainer">
        {socialData.map((item, index) => renderSocial(item, index))}
      </div>

      {/* SECTION H2 HEADING EMAIL */}
      <h2 className="emailHeadingContact">Email</h2>
      {/* SECTION HR */}
      <hr />

      {/* SECTION EMAIL COINTAINER */}
      <div className="contactContainer mailContainer">
        {emailData.map((item, index) => renderEmail(item, index))}
      </div>

      {/* SECTION H2 HEADING MESSAGE */}
      <h2 className="messageHeadingContact">Send Message</h2>
      {/* SECTION HR */}
      <hr />

      {/* SECTION MESSAGE CONTAINER */}
      <div className="message-container">
        {/* SECTION MESSAGE FORM */}
        <form ref={formRef} onSubmit={handleSubmit} className="message-form">
          {/* SECTION MESSAGE INPUTS */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />

          {/* SECTION MESSAGE TEXTAREA */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          {/* SECTION MESSAGE SUBMIT BUTTON */}
          <button type="submit">Send Message</button>

          {status.message && (
            <div className={`form-alert ${status.type}`}>{status.message}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
