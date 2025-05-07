import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Cybersecurity from "../assets/Cybersecurity.png"
import Cisco1 from "../assets/Cisco1.png"
import Cisco2 from "../assets/Cisco2.png"
import Cisco3 from "../assets/Cisco3.png"
import IBM from "../assets/IBM.png"
import DICT001 from "../assets/DICT001.png"
import DICT004 from "../assets/DICT004.png"
import DICT006 from "../assets/DICT006.png"
import DICT014 from "../assets/DICT014.png"
import DICT015 from "../assets/DICT015.png"
import DICT016 from "../assets/DICT016.png"
import DICT018 from "../assets/DICT018.png"

// Simple array of certification images
const certificationImages = [
  Cybersecurity,
  Cisco1,
  Cisco2,
  Cisco3,
  IBM,
  DICT001,
  DICT004,
  DICT006,
  DICT014,
  DICT015,
  DICT016,
  DICT018,
]

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? certificationImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === certificationImages.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <section id="certifications" className="py-32 bg-gray-900">
      <div className="container mx-auto px-8">
        <h2 className="section-heading text-5xl mb-16 text-center mx-auto">Certifications</h2>

        <div className="max-w-[75%] mx-auto">
          <div className="relative h-[400px] md:h-[500px]">
            {/* Carousel container */}
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-gray-800">
              {/* Current slide */}
              <div
                className="h-full w-full flex items-center justify-center bg-gray-800 transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                <img
                  src={certificationImages[currentIndex] || "/placeholder.svg"}
                  alt={`Certification ${currentIndex + 1}`}
                  className="max-h-full max-w-full object-contain p-4"
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              {certificationImages.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    slideIndex === currentIndex ? "bg-blue-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
