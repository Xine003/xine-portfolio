import { useState } from "react"
import { Github, Linkedin, FileText, Menu, X } from "lucide-react"
import CV from "../assets/OriasCV.pdf"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const downloadCV = () => {
    // Create an anchor element and trigger download
    const link = document.createElement("a")
    link.href = CV
    link.download = "OriasCV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800 left-0 right-0 h-20">
      <div className="container mx-auto px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <a href="#" className="text-2xl font-bold text-white">
            <span className="text-blue-500">Xine</span>Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 mx-auto">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-blue-500 transition-colors text-xl"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-blue-500 transition-colors text-xl"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-500 transition-colors text-xl"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-gray-300 hover:text-blue-500 transition-colors text-xl"
            >
              Certificate
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-blue-500 transition-colors text-xl"
            >
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="https://github.com/Xine003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/franxine-orias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-colors"
            >
              <FileText size={20} />
              CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-blue-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 right-0 top-20 bg-black/90 backdrop-blur-md border-b border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-8 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-blue-500 transition-colors text-left text-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-blue-500 transition-colors text-left text-lg"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-blue-500 transition-colors text-left text-lg"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="text-gray-300 hover:text-blue-500 transition-colors text-left text-lg"
              >
                Certificate
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-blue-500 transition-colors text-left text-lg"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com/Xine003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/franxine-orias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <button
                  onClick={downloadCV}
                  className="text-gray-300 hover:text-blue-500 transition-colors"                >
                  <FileText size={20} />
                  CV
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
