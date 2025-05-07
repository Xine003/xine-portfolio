import type React from "react"
import { Code, Database, Layout, Server, Shield } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-10 w-10 text-blue-500" />,
    skills: ["HTML5", "JavaScript", "TypeScript", "React", "Tailwind"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-10 w-10 text-blue-500" />,
    skills: ["Node.js", "Python", "Java Springboot", "C#"],
  },
  {
    title: "Database",
    icon: <Database className="h-10 w-10 text-blue-500" />,
    skills: ["MariaDB", "MySQL", "Firebase"],
  },
  {
    title: "Tools",
    icon: <Code className="h-10 w-10 text-blue-500" />,
    skills: ["Git", "GitHub", "Linux", "VS Code", "Unity", "Cisco Packet Tracer"],
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    skills: ["Networking", "Firewall", "Nmap", "Wireshark"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-32 bg-gray-900">
      {/* Changed the section background to gray-900 to make it the container */}
      <div className="container mx-auto px-8">
        <h2 className="section-heading text-5xl mb-16 text-center mx-auto">My Skills</h2>

        {/* Removed the background container and kept just the grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl mx-auto px-4 sm:px-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-5">
                {category.icon}
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gray-900 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
