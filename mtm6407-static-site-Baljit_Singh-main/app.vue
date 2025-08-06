<template>
  <div class="layout-wrapper">
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content Area -->
    <main class="main-section">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
/* Layout Wrapper with a soft painted background */
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #66bef1ff, #71d2f8ff, #ec94f8ff);
  background-attachment: fixed;
  background-size: cover;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

/* Main Section Styling */
.main-section {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Responsive Tweaks */
@media (max-width: 768px) {
  .main-section {
    padding: 2rem 1rem;
  }
}

@media (max-width: 480px) {
  .main-section {
    padding: 1.5rem 0.8rem;
  }
}

/* Smooth Font Rendering */
body {
  margin: 0;
  padding: 0;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
}
</style>
