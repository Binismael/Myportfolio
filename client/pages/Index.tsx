import { useState } from 'react';
import { Menu, X, Download, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold font-poppins text-black">Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-black hover:text-primary transition-colors font-medium">Home</a>
                <a href="#about" className="text-black hover:text-primary transition-colors font-medium">About Me</a>
                <a href="#services" className="text-black hover:text-primary transition-colors font-medium">Services</a>
                <a href="#projects" className="text-black hover:text-primary transition-colors font-medium">Projects</a>
                <a href="#testimonials" className="text-black hover:text-primary transition-colors font-medium">Testimonials</a>
                <a href="#contact" className="text-black hover:text-primary transition-colors font-medium">Contact</a>
              </div>
            </div>

            <div className="hidden md:block">
              <button className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors">
                Download CV
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-black">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-black hover:text-primary">Home</a>
              <a href="#about" className="block px-3 py-2 text-black hover:text-primary">About Me</a>
              <a href="#services" className="block px-3 py-2 text-black hover:text-primary">Services</a>
              <a href="#projects" className="block px-3 py-2 text-black hover:text-primary">Projects</a>
              <a href="#testimonials" className="block px-3 py-2 text-black hover:text-primary">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-black hover:text-primary">Contact</a>
              <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-md font-medium">
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-black leading-tight">
                Hi I'm <span className="text-primary">AbdulmuizIsmail</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-black mt-4">
                UI & UX <span className="text-primary">Designer</span>
              </h2>
              <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-lg">
                A passionate and purpose-driven Frontend Developer and UI/UX Designer who loves building digital solutions that are clean, accessible, and impactful. I specialize in turning creative ideas into responsive, user-friendly web experiences using tools like Figma, HTML, CSS, JavaScript, V0 and firebase.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download CV
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition-colors">
                  Hire Me
                </button>
              </div>
              <div className="mt-8 flex gap-6">
                <a href="#" className="text-black hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-black hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-black hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-primary">
                  <img 
                    src="https://cdn.builder.io/api/v1/assets/26f767f21e854de3ba4615353253a1e8/whatsapp-image-2025-08-03-at-15.33.07_4d015500-c509fd?format=webp&width=800" 
                    alt="AbdulmuizIsmail - UI/UX Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-full">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black">
              About Me
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              I'm committed to continuous learning, collaboration, and creating value through code and design. Whether it's contributing to team projects, solving user pain points, or bringing a vision to life — I'm always up for the challenge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold font-poppins text-primary mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-poppins text-primary mb-2">3+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-poppins text-primary mb-2">30+</div>
                  <div className="text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-poppins text-primary mb-2">5+</div>
                  <div className="text-gray-600 font-medium">Awards Won</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-black">UI/UX Design</span>
                    <span className="text-primary font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-black">Frontend Development</span>
                    <span className="text-primary font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-black">React Development</span>
                    <span className="text-primary font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-black">Firebase</span>
                    <span className="text-primary font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black">
              Services
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              I offer a range of design and development services to help bring your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-bold font-poppins text-black mb-4">UI/UX</h3>
              <p className="text-gray-600">Creating intuitive and engaging user interfaces with exceptional user experience design.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-bold font-poppins text-black mb-4">Web Design</h3>
              <p className="text-gray-600">Designing beautiful and responsive websites that work seamlessly across all devices.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-bold font-poppins text-black mb-4">App Design</h3>
              <p className="text-gray-600">Crafting mobile app interfaces that provide excellent user experiences on iOS and Android.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-bold font-poppins text-black mb-4">Graphic Design</h3>
              <p className="text-gray-600">Creating visual content that communicates your brand message effectively and professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black">
              My Projects
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">P{project}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-poppins text-black mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the project and the technologies used to build it.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-primary text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-orange-100 text-primary text-sm rounded-full">Figma</span>
                  </div>
                  <button className="text-primary font-medium hover:underline">View Project →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black">
              Testimonials
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              What my clients say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-black">Client Name {testimonial}</h4>
                    <p className="text-gray-600 text-sm">CEO, Company</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Working with AbdulmuizIsmail was an excellent experience. He delivered high-quality work on time and exceeded our expectations."
                </p>
                <div className="flex text-primary mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-black">
              Let's Design Together
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <textarea 
                    rows={6} 
                    placeholder="Your Message" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 mx-auto"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold font-poppins mb-4">AbdulmuizIsmail</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                A passionate Frontend Developer and UI/UX Designer creating digital solutions that make a difference.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>abdulmuizismail@example.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Location, Country</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 AbdulmuizIsmail. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
