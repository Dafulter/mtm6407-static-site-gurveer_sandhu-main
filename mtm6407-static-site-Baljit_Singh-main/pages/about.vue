<template>
  <section class="about-wrapper">
    <div class="about-card">
      <h1>👋 About Me</h1>
      <p>
        I'm <strong>Gurveer Singh Sandhu</strong>, a web development enthusiast passionate about crafting clean, responsive, and user-friendly websites.
        Currently enrolled in <strong>MTM6407 – Web Development IV</strong>, I’m focused on enhancing my skills in static site generation and modern web frameworks.
      </p>

      <div class="skills-section">
        <h2>💼 Skills & Technologies</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Vue.js, Next.js</li>
          <li>Responsive & Mobile-First Design</li>
          <li>Git & GitHub Workflow</li>
          <li>UI Design with Figma & Canva</li>
        </ul>
      </div>

      <div class="interests-section">
        <h2>🎨 Interests</h2>
        <p>
          Besides coding, I enjoy graphic design, photography, and collaborating on creative projects that challenge my problem-solving abilities.
          I’m always eager to learn and grow as a developer.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #e0f7fa, #ffffff);
}

.about-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  max-width: 700px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2.2rem;
  color: #00796b;
  margin-bottom: 1.2rem;
  text-align: center;
}

h2 {
  font-size: 1.4rem;
  color: #004d40;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
}

p {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  background: #e0f2f1;
  margin-bottom: 0.6rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.3s ease;
}

ul li:hover {
  background: #b2dfdb;
}

@media (max-width: 600px) {
  .about-card {
    padding: 2rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.3rem;
  }
}
</style>
