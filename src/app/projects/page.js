export default function ProjectsPage() {
  return (
    <main className="container">
      <section className="section">
        <h1>My Projects</h1>
        <p>
          Here’s a selection of projects that highlight my journey in web development and digital media design. Each project showcases different skills I've gained through coursework, personal exploration, and hands-on practice.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <h2>📄 Static Website Project</h2>
            <p>
              A fully responsive static website built with semantic HTML5, custom CSS3, and vanilla JavaScript. Focused on clean layouts, accessibility best practices, and optimized performance across devices.
            </p>
            <p><strong>Tools:</strong> HTML5, CSS3, JavaScript</p>
          </div>

          <div className="project-card">
            <h2>📇 Vue Contact Manager App</h2>
            <p>
              A Single Page Application (SPA) developed with Vue 3 that allows users to add, edit, and delete contacts. Data is persistently stored in the browser using Local Storage. The interface is clean and fully responsive.
            </p>
            <p><strong>Tools:</strong> Vue 3, Vue Router, Local Storage</p>
          </div>

          <div className="project-card">
            <h2>💼 Personal Portfolio Website</h2>
            <p>
              My personal portfolio website — designed and developed using Next.js and custom CSS. This project reflects my skills in responsive design, component-based development, and content presentation.
            </p>
            <p><strong>Tools:</strong> Next.js, React, Custom CSS</p>
          </div>

          <div className="project-card">
            <h2>🖼️ Interactive Photo Gallery</h2>
            <p>
              A visually appealing photo gallery showcasing various design assets and nature imagery. Built with a responsive CSS Grid layout, providing smooth user interaction and adaptive visuals on all devices.
            </p>
            <p><strong>Tools:</strong> HTML5, CSS Grid, JavaScript</p>
          </div>

          <div className="project-card">
            <h2>🎨 UI/UX Design Mockups</h2>
            <p>
              A collection of UI/UX design mockups created using Figma. These include landing pages, mobile app layouts, and wireframes, emphasizing clean design and user-centered interface solutions.
            </p>
            <p><strong>Tools:</strong> Figma, Adobe XD</p>
          </div>
        </div>
      </section>
    </main>
  );
}
