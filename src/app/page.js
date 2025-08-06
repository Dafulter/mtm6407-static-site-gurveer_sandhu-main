export default function HomePage() {
  return (
    <main className="homepage-container">
      <div className="center-box">
        <h1>
          Hi, I'm <span className="highlight">Gurveer Sandhu</span>
        </h1>
        <p className="tagline">Front-End Developer & Digital Media Enthusiast</p>
        <p className="description">
          Welcome to my personal portfolio website, built with <strong>Next.js</strong> as part of the MTM6407 Web Development IV course. Here, you’ll find a curated selection of my projects, creative works, and the skills I’ve developed through hands-on learning in interactive media design.
        </p>

        <div className="buttons">
          <a href="/projects" className="btn primary-btn">🚀 View My Projects</a>
          <a href="/contact" className="btn secondary-btn">📨 Get in Touch</a>
        </div>
      </div>
    </main>
  );
}
