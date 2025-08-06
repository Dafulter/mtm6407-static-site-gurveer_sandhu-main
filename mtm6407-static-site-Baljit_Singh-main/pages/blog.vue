<template>
  <section class="blog-container">
    <h1>My Articles & Insights</h1>
    <p class="subtitle">
      Sharing knowledge, tips, and experiences from my web development journey.
    </p>

    <div class="blog-grid">
      <div v-for="post in blogPosts" :key="post.id" class="blog-item">
        <h2>{{ post.title }}</h2>
        <p class="snippet">{{ post.snippet }}</p>
        <p class="meta">Published: {{ post.date }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'The Importance of Responsive Design',
          snippet: 'Responsive design ensures your website looks great on all devices. Learn how to approach mobile-first design and utilize media queries effectively...',
          date: 'August 5, 2025'
        },
        {
          id: 2,
          title: 'Introduction to Vue 3 Composition API',
          snippet: 'Vue 3 introduces the Composition API, providing better logic reuse and cleaner code structures. This article walks through creating a simple counter app using Composition API...',
          date: 'July 28, 2025'
        },
        {
          id: 3,
          title: 'Static Site Generation with Next.js',
          snippet: 'SSG allows you to pre-render pages at build time, which boosts performance and SEO. Here’s a step-by-step guide on setting up a static Next.js site...',
          date: 'July 15, 2025'
        }
      ]
    };
  }
};
</script>

<style scoped>
.blog-container {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  color: #1b5e20;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.blog-item {
  background-color: #ffffff;
  padding: 1.8rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.blog-item h2 {
  font-size: 1.5rem;
  color: #004d40;
  margin-bottom: 0.75rem;
}

.snippet {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.meta {
  font-size: 0.9rem;
  color: #888;
}
</style>
