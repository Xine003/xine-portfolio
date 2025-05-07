import { Github, Linkedin } from "lucide-react"
import profileImage from "../assets/Profile.jpeg"

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-5xl mb-16 text-center mx-auto">About Me</h2>

        {/* Adjusted container width based on screen size */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 w-full max-w-full sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto p-4 sm:p-6 lg:p-8">
          {/* Changed to flex layout for better responsiveness */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Text content - full width on mobile, 50% on large screens */}
            <div className="order-2 lg:order-1 w-full lg:w-1/2">
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                Hello! I'm a Computer Science student with a passion for cybersecurity—particularly in Blue Team
                operations. My journey in tech began with a curiosity about how systems work and a desire to protect
                them from evolving digital threats.
              </p>
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                With a solid foundation in programming and network fundamentals, I'm focused on learning and applying
                cybersecurity best practices to defend systems, detect threats, and respond effectively. Whether it's
                strengthening network defenses, analyzing vulnerabilities, or conducting incident response, I'm
                committed to continuous learning and growth in this dynamic field.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://github.com/Xine003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors text-base"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/franxine-orias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-base"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Image - responsive sizing */}
            <div className="order-1 lg:order-2 flex justify-center w-full lg:w-1/2">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="relative bg-gray-800 rounded-full p-3 border-2 border-blue-500 w-full h-full">
                  <img
                    src={profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
