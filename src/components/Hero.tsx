import { useEffect, useRef, useState } from "react"
import { ArrowDown, FileDown } from "lucide-react"
import CV from "../assets/OriasCV.pdf"

interface MeteorShower {
  id: number
  left: string
  delay: string
  duration: string
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [meteorShowers, setMeteorShowers] = useState<MeteorShower[]>([])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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

  useEffect(() => {
    // Create meteor showers periodically
    const meteorInterval = setInterval(() => {
      createMeteorShower()
    }, 8000)

    return () => clearInterval(meteorInterval)
  }, [])

  const createMeteorShower = () => {
    const meteors: { id: number; left: string; delay: string; duration: string }[] = []
    const count = Math.floor(Math.random() * 3) + 1 // 1-3 meteors per shower

    for (let i = 0; i < count; i++) {
      meteors.push({
        id: Date.now() + i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${Math.random() * 1 + 0.5}s`,
      })
    }

    setMeteorShowers((prev) => [...prev, ...meteors])

    // Remove meteors after they're done
    setTimeout(() => {
      setMeteorShowers((prev) => prev.filter((m) => !meteors.some((nm) => nm.id === m.id)))
    }, 3000)
  }

  useEffect(() => {
    // Create stars with more variety
    if (heroRef.current) {
      const container = heroRef.current
      const starCount = 80 // More stars

      // Clear any existing stars
      const existingStars = container.querySelectorAll(".star")
      existingStars.forEach((star) => star.remove())

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div")
        star.className = "star"

        // More variety in star sizes
        const size = Math.random() * 4 + 1
        star.style.width = `${size}px`
        star.style.height = star.style.width

        // Random positions
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`

        // Different animation speeds and delays
        star.style.animationDuration = `${Math.random() * 4 + 2}s`
        star.style.animationDelay = `${Math.random() * 4}s`

        // Different brightness levels
        const brightness = Math.random() * 0.5 + 0.5
        star.style.opacity = brightness.toString()

        // Add a subtle color tint to some stars
        if (Math.random() > 0.7) {
          const hue = Math.random() * 60 // Slight blue/white variations
          star.style.backgroundColor = `hsl(${hue}, 100%, 90%)`
        }

        container.appendChild(star)
      }

      // Create birds
      const birdCount = 8
      for (let i = 0; i < birdCount; i++) {
        const bird = document.createElement("div")
        bird.className = "bird"
        bird.style.left = `${Math.random() * 100}%`
        bird.style.top = `${40 + Math.random() * 20}%`
        bird.style.animationDelay = `${Math.random() * 10}s`
        container.appendChild(bird)
      }
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950"
    >
      <div className="parallax-stars"></div>

      {/* Meteor showers */}
      {meteorShowers.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        ></div>
      ))}

      {/* Fixed Moon - positioned responsively */}
      <div className="absolute z-10 top-[20%] right-[20%] md:top-[25%] md:right-[25%] lg:top-[20%] lg:right-[20%]">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gray-100 moon-glow">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Moon craters */}
            <div className="absolute w-10 h-10 rounded-full bg-gray-300/30" style={{ top: "20%", left: "30%" }}></div>
            <div className="absolute w-8 h-8 rounded-full bg-gray-300/20" style={{ top: "50%", left: "70%" }}></div>
            <div className="absolute w-12 h-12 rounded-full bg-gray-300/25" style={{ top: "70%", left: "40%" }}></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-300/20" style={{ top: "30%", left: "60%" }}></div>
          </div>
        </div>
      </div>

      {/* Forest Silhouette */}
      <div className="forest-silhouette"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center md:text-left md:ml-20 xl:ml-40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="block">Hello, I'm</span>
          <span className="text-blue-500 block mt-2">Xine</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-xl">
        Aspiring Cybersecurity Professional specializing in Blue Team operations, with a strong foundation in Computer Science and a commitment to digital defense
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium"
          >
            View My Work
          </button>
          <button
            onClick={downloadCV}
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md text-lg font-medium flex items-center justify-center gap-2"
          >
            Download CV
            <FileDown className="h-5 w-5" />
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default Hero
