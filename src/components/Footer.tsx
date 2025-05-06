import { Github, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-blue-500">Xine</span>Portfolio
            </h3>
            <p className="text-gray-400 mb-4">
              A portfolio showcasing my projects, skills and experience as a developer. Feel free to explore and connect with me!
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Xine003" className="hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/franxine-orias/" className="hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/x._.ine/" className="hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-blue-500 transition-colors">
                Skills
              </a>
              <a href="#certifications" className="text-gray-400 hover:text-blue-500 transition-colors">
                Certificate
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Bo. Concepcion Tala Caloocan City</p>
              <p>orias.franxine@gmail.com</p>
              <p>09684522678</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Orias Franxine C. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
