
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the structure of a testimonial
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Heeni Nyakanjuki",
    role: "Director",
    company: "FANCY GROUP, INC",
    image: "/placeholder.svg", // Using placeholder as fallback
    quote: "Working with the student team was an excellent experience. They brought fresh ideas and technical skills that helped us solve a challenging problem. Their professionalism exceeded our expectations and delivered real value to our business. We'll definitely use this platform again for future projects."
  },
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Tech Innovations Ltd",
    image: "/placeholder.svg",
    quote: "The students delivered exceptional work that exceeded our expectations. Their creative approach to problem-solving and technical expertise impressed our entire team. The platform made collaboration seamless, and we've already recommended it to our partners."
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Global Solutions",
    image: "/placeholder.svg",
    quote: "We were blown away by the quality of work from the student team. They quickly understood our challenges and delivered a solution that was both innovative and practical. Their communication was excellent throughout the project, making the whole process smooth and enjoyable."
  }
];

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left' | null>(null);
  
  const goToPrevious = () => {
    setSlideDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setSlideDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-16 text-center">
          What Other Employers Are Saying
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto relative overflow-hidden">
          <div 
            className={cn(
              "transition-all duration-500 ease-in-out",
              slideDirection === 'right' ? "animate-slide-in-right" : "",
              slideDirection === 'left' ? "animate-slide-in-left" : ""
            )}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/5">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="rounded-lg w-full h-auto object-cover shadow-md"
                />
              </div>
              <div className="md:w-3/5 py-4 md:py-8">
                <h2 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h2>
                <p className="text-sm text-gray-600 mb-4">{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
                <p className="text-gray-700 mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                  <button 
                    onClick={goToPrevious}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <div className="flex space-x-2 items-center">
                    {testimonials.map((_, index) => (
                      <span 
                        key={index} 
                        className={`block h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-label={index === currentIndex ? 'Current testimonial' : `Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={goToNext}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
