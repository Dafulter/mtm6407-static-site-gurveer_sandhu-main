export default function ContactPage() {
  return (
    <main className="contact-section">
      <div className="contact-header">
        <h1>Let's Connect</h1>
        <p>
          Have a project in mind? Or just want to chat about web development, design, or digital media? Drop me a message — I'm always open to new ideas and collaborations!
        </p>
        <p>
          <strong>Email:</strong> gurveer.sandhu@example.com
        </p>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email</label>
            <input type="email" id="emailAddress" name="emailAddress" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="What’s this about?" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>
        </div>

        <button type="submit" className="btn-submit">📨 Send Message</button>
      </form>
    </main>
  );
}
