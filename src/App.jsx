import { useState } from 'react'
import  PixelBlast  from './components/PixelBlast'
import  GlassmorphismNav  from './components/navbar'
import './App.css'

// Hero Section
function HeroSection() {
  return (
    <section className="hero-section">
      <GlassmorphismNav/> 
      <div className="hero-background">
        <PixelBlast
          pixelSize={9}
          color="#B19EEF"
          patternScale={2.5}
          patternDensity={1.1}
          rippleSpeed={0.45}
          rippleThickness={0.21}
          speed={0.4}
          edgeFade={0.25}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm a Software Developer</h1>
        <p className="hero-subtitle">
          Crafting clean, efficient code • Building scalable web applications • Always learning
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Vite',
      tech: ['React', 'JavaScript', 'CSS'],
      link: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full-stack application with backend integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Performance-optimized dashboard with real-time data',
      tech: ['React', 'TypeScript', 'API'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const skills = {
    Languages: ['JavaScript', 'Python', 'SQL'],
    Frontend: ['React', 'HTML/CSS', 'Responsive Design'],
    Backend: ['Node.js', 'REST APIs', 'Database Design'],
    Tools: ['Git', 'VS Code', 'Figma']
  }

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {skillList.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // In a real app, you'd send this to a backend
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Your Name. Built with React & Vite.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
