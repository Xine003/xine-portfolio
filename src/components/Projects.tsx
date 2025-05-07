import { ExternalLink, Github } from "lucide-react"
import Clinic from "../assets/Clinic.png"
import Scanner from "../assets/Scanner.jpg"
import NaviGaze from "../assets/NaviGaze.png"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  codeLink: string
}

const projects: Project[] = [
  {
    title: "Clinic Management System",
    description: "Clinic Management System for a real client, featuring patient record management, visit and check-up tracking, and multi-branch service configuration",
    image: Clinic,
    tags: ["React", "Java Springboot", "MySQL", "Typescript"],
    codeLink: "https://github.com/Xine003/clinic-management-system/tree/main",
  },
  {
    title: "Network Scanner Application",
    description: " Python-based network scanner using Nmap on Ubuntu Linux to detect active hosts, open ports, and running services within a local network, automating scans and parsing results for simplified analysis.",
    image: Scanner,
    tags: ["Python", "Linux", "Nmap"],
    codeLink: "https://github.com/Xine003/NetworkScanner-Nmap",
  },
  {
    title: "NaviGaze",
    description: "A mobile indoor navigation app for the University of Caloocan City, including student schedule integration, user profile and avatar management, and backend logic for role-based dashboards for Students and Professors.",
    image: NaviGaze,
    tags: ["C#", "Unity", "Firebase"],
    codeLink: "https://github.com/Xine003/NaviGaze-Indoor-Navigation",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gray-950">
      <div className="container mx-auto px-8">
        <h2 className="section-heading text-5xl mb-16 text-center mx-auto">My Projects</h2>

        {/* Removed the background container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[75%] mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 overflow-hidden rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain bg-gray-900 p-2"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-900 text-gray-300 px-2 py-1 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.codeLink}
                    className="border border-gray-700 text-gray-300 hover:bg-gray-700 px-3 py-1.5 rounded-md text-sm font-medium flex items-center"
                  >
                    <Github className="mr-1.5 h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
