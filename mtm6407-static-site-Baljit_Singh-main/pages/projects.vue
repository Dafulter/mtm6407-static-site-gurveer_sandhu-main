<template>
  <section class="projects-wrapper">
    <h1>🚀 My Projects</h1>
    <p class="intro">
      Here are some of the projects I’ve built during my web development journey. Each project helped me enhance my coding, design, and problem-solving skills.
    </p>

    <div class="projects-grid">
      <a
        v-for="project in projects"
        :key="project.id"
        :href="project.link"
        target="_blank"
        rel="noopener"
        class="project-card"
      >
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: '🌐 Personal Portfolio Website',
          description: 'A responsive portfolio built using HTML, CSS, and JavaScript showcasing my projects and resume.',
          link: '#'
        },
        {
          id: 2,
          title: '📱 React To-Do App',
          description: 'A sleek to-do list application built with React.js featuring local storage persistence.',
          link: '#'
        },
        {
          id: 3,
          title: '🛒 E-commerce Product Page',
          description: 'A mock e-commerce product detail page with interactive image gallery and responsive layout.',
          link: '#'
        },
        {
          id: 4,
          title: '🖼️ Image Gallery Grid',
          description: 'A CSS Grid-based photo gallery layout that adapts beautifully across devices.',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-wrapper {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #004d40;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: inherit;
  text-decoration: none;
  display: block;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.project-card h2 {
  font-size: 1.4rem;
  color: #00796b;
  margin-bottom: 0.8rem;
}

.project-card p {
  font-size: 1rem;
  color: #555;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
