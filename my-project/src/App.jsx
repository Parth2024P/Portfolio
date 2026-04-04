import { useState, useEffect } from 'react';
import PixelBlast from './components/PixelBlast';
import Navbar from './components/navbar';
import ReflectiveCard from './components/skillCard';
// --- 1. HERO SECTION ---
function HeroSection() {
  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] px-6 text-center">
<div className="absolute inset-0 z-0 pointer-events-none">
<PixelBlast
  pixelSize={20}          
  patternScale={3.0}     
  patternDensity={1.2}
  rippleSpeed={0.3}       
  rippleThickness={0.15}  
  speed={0.3}            
  edgeFade={0.4}         
/>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>
  <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg text-white">
          Hi, I'm Parth Pareek
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
          Computer Engineering Student @ VIT Chennai
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

// --- 2. PROJECTS SECTION ---
function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to local projects if backend fails
        setProjects([
          {
            id: 1,
            title: 'Campus Guide Website',
            description: 'Interactive platform to help students navigate the college campus effectively.',
            tech: ['React', 'JavaScript', 'CSS'],
            link: '#'
          },
          {
            id: 2,
            title: 'FitForm AI',
            description: 'Real-time video analysis model for tracking and correcting workout form.',
            tech: ['Python', 'Computer Vision', 'AI'],
            link: '#'
          },
          {
            id: 3,
            title: 'Project Three',
            description: 'Performance-optimized dashboard with real-time data integration.',
            tech: ['React', 'Node.js', 'API'],
            link: '#'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] w-full px-6 py-20 bg-black/40 backdrop-blur-sm border-y border-white/5">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        
        {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ReflectiveCard 
            key={project.id}
             Project_name={project.title}
            description={project.description}
            tech={project.tech}
            blurStrength={12}
            color="white"
            /> 
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 3. SKILLS SECTION ---
function SkillsSection() {
  const skills = {
    Languages: ['C/C++', 'Python', 'JavaScript', 'Java'],
    Frontend: ['React', 'HTML/CSS', 'Responsive Design'],
    Backend: ['Node.js', 'REST APIs', 'SQL'],
    Tools: ['Git', 'VS Code', 'Generative AI']
  };

  return (
    <section id="skills" className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] w-full px-6 py-20">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-2">{category}</h3>
              <ul className="space-y-3">
                {skillList.map(skill => (
                  <li key={skill} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 4. CONTACT SECTION ---
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('❌ Error: ' + (data.error || 'Failed to send'));
      }
    } catch (error) {
      setStatus('❌ Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] w-full px-6 py-20 bg-black/40 backdrop-blur-sm border-t border-white/5">
      <div className="w-full max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">Let's Connect</h2>
        <p className="text-center text-gray-400 mb-10">I'm currently looking for new opportunities. My inbox is always open!</p>
        
        {/* Glassmorphism Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="text-center text-sm mt-2 text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}

// --- 5. FOOTER ---
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8 text-center bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm mb-4">&copy; {new Date().getFullYear()} Parth Pareek. Built with React & Tailwind.</p>
        <div className="flex justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

// --- 6. MAIN APP ASSEMBLY ---
// --- 6. MAIN APP ASSEMBLY ---
export default function App() {
  return (
    <div className="relative w-full bg-black font-sans overflow-x-hidden">
      
      <Navbar />

      {/* CONTENT SECTIONS */}
      <main className="w-full flex flex-col">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        
      </main>
      
      <Footer />
    </div>
  );
}