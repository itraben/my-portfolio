import { useState } from 'react'
import './App.css'

// Add your actual projects here. Supply links to enable the project buttons.
const projects: {
  title: string
  category: string
  description: string
  tags: string[]
  image?: string
  url?: string
}[] = [
  {
    title: 'Zelle® at PNC',
    category: '01 / CORPORATE WORK',
    description:'Maintained the Zelle portion of the native PNC Android application for over 5 years.',
    image: 'zelle.png',
    tags: ['Java, Kotlin'],
  },
  {
    title: 'Ultimate Dodger',
    category: '02 / STARTUP WORK',
    description: 'Developed and published a mobile arcade game from the ground-up for both iOS and Android.',
    image: 'ultimate-dodger.png',
    url: 'https://apps.apple.com/us/app/ultimate-dodger/id6812841452',
    tags: ['GML, Swift'],
  },
  {
    title: 'Senior Design Project',
    category: '03 / EDUCATIONAL WORK',
    description: 'Worked with a team to develop a mixed-reality nursing simulation for Microsoft HoloLens and was awarded second place in the Washkewicz College of Engineering senior design competition.',
    image: 'senior-design.png',
    url: 'https://youtu.be/BbmSpQ3bWpo?si=MglUS34xmKLhyFnv',
    tags: ['C#'],
  },
]

export default function App() {
  const [photoFailed, setPhotoFailed] = useState(false)

  // Replace these with your real details to display contact links.
  const email: string = 'isaiahtraben@gmail.com'
  const github: string = ''
  const linkedin: string = 'https://www.linkedin.com/in/isaiah-traben/'

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="header wrap">
        <a className="wordmark" href="#home" aria-label="Isaiah Traben home">
          it<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">
            Let’s connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="intro-title">
          <div className="intro">
            <p className="eyebrow">
              <span className="dot" /> SOFTWARE DEVELOPER
            </p>

            <h1 id="intro-title">
              Hi, I’m Isaiah.
              <br />
              I build things
              <br />
              <em>with purpose.</em>
            </h1>

            <p className="lead">
              Welcome to my corner of the web. This is where I share the software
              I build, the problems I solve, and what I learn along the way.
            </p>

            <a className="button" href="#projects">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure className="portrait-card">
            <div className="portrait">
              {!photoFailed ? (
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Isaiah Traben"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="photo-placeholder">
                  <span className="initials" aria-hidden="true">
                    IT
                  </span>
                  <p>Your photo goes here</p>
                  <small>Add profile.jpg to the public folder</small>
                </div>
              )}
            </div>

            <figcaption>
              <span>Isaiah Traben</span>
              <span className="portrait-note">Developer & curious mind</span>
            </figcaption>
          </figure>
        </section>

        <section
          className="about section wrap"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2 id="about-title">
              Curiosity meets
              <br />
              computer science.
            </h2>
          </div>

          <div className="about-copy">
            <p>
              I’m Isaiah, a software developer with a bachelor’s degree in
              Computer Science. I enjoy turning ideas into useful software and
              understanding how things work.
            </p>
            <p>
              This portfolio is a home for my projects and the thinking behind
              them. Explore my work below to learn more about what I’m building.
            </p>

            <div className="tags">
              <span>Software development</span>
              <span>Problem solving</span>
              <span>Continuous learning</span>
            </div>
          </div>
        </section>

        <section
          className="section wrap"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">IDEAS INTO SOFTWARE</p>
              <h2 id="projects-title">
                Previous Work<span className="green">.</span>
              </h2>
            </div>
            <p>Apps I've made or contributed to</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <p className="eyebrow">{project.category}</p>

                <div className="project-art" aria-hidden="true">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt=""
                    loading="lazy"
                  />
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.url && (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">LET’S CONNECT</p>
          <h2 id="contact-title">
            Good software starts
            <br />
            with a conversation.
          </h2>
          <p>Have a project in mind or want to talk about my work?</p>

          {email ? (
            <a className="button" href={`mailto:${email}`}>
              Say hello ↗
            </a>
          ) : (
            <p className="contact-placeholder">Contact details coming soon.</p>
          )}

          <div className="socials">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Isaiah Traben</span>
        <span>Built with React & TypeScript</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}