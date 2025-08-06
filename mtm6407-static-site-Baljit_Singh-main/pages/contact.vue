<template>
  <section class="contact-container">
    <h1>Contact Me</h1>
    <p class="intro">
      I'd love to hear from you! Whether it's a project collaboration, a question, or just to say hello — feel free to reach out.
    </p>

    <form class="contact-form">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" rows="5" placeholder="Type your message here..." required></textarea>
      </div>

      <button type="submit" class="send-btn">Send Message</button>
    </form>

    <div class="contact-details">
      <h2>Other Ways to Connect</h2>
      <p>Email: <a href="mailto:gurveer@example.com">gurveer@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/gurveer" target="_blank">linkedin.com/in/gurveer</a></p>
      <p>GitHub: <a href="https://github.com/gurveer" target="_blank">github.com/gurveer</a></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
};
</script>

<style scoped>
.contact-container {
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
}

h1 {
  text-align: center;
  color: #00796b;
  margin-bottom: 1rem;
}

.intro {
  text-align: center;
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

input,
textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #00796b;
  box-shadow: 0 0 0 2px rgba(0, 121, 107, 0.2);
}

.send-btn {
  padding: 0.9rem 1.5rem;
  background-color: #00796b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.3s ease;
}

.send-btn:hover {
  background-color: #004d40;
}

.contact-details {
  margin-top: 3rem;
  border-top: 1px solid #e0e0e0;
  padding-top: 2rem;
  font-size: 1rem;
  color: #333;
}

.contact-details h2 {
  color: #004d40;
  margin-bottom: 1rem;
}

.contact-details a {
  color: #00796b;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .contact-container {
    padding: 1.5rem;
  }
}
</style>
