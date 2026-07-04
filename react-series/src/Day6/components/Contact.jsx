function Contact() {
  return (
    <section id="contact" className="section">

      <h2>Contact Me</h2>

      <form className="contact">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <textarea
          placeholder="Message"
        ></textarea>

        <button>Send Message</button>

      </form>

    </section>
  );
}

export default Contact;